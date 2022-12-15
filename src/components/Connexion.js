import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { getDocs, query, collection, where } from 'firebase/firestore';
import { db } from '../firebase';

export default function Connexion({route, navigation }) {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState("");
    const [isValid, setIsValid] = useState(Boolean)

    useEffect(() => {
        if (route.params != undefined) {
            onChangeEmail(route.params.email)
        }
    }, [])


    const connexion = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                setIsValid(true)
                const user = userCredential.user;
                const q = query(collection(db, "usersCollection"), where("email", "==", user.email));
                const docSnap = await getDocs(q);
                docSnap.forEach((res) => {
                   console.log(res.data().id)
                   navigation.navigate('Prestation', { idUser: res.data().id })
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }
    

    return (
        <View style={styles.container}>
            <TextInput placeholder='Email' style={styles.input} onChangeText={onChangeEmail}
                value={email} />
            <TextInput placeholder='Mot de passe' secureTextEntry={true} style={styles.input} value={password} onChangeText={onChangePassword} />
            <Button onPress={connexion} title="Connexion" color="#841584" accessibilityLabel="Connexion" />

            {isValid ? <Text>Connexion réussi</Text> : <Text></Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
