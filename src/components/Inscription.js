import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, {useState} from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase';

export default function Inscription({ navigation }) {
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    const [nom, onChangeNom] = useState('');
    const [prenom, onChangePrenom] = useState('');
    const [adresse, onChangeAdresse] = useState('');
    const [isValid, setIsValid] = useState(Boolean)

    const inscription = (e) => {
        setIsValid(true)
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                creationInfoSupplementaires(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }

    const creationInfoSupplementaires = async (user) => {
        await addDoc(collection(db, 'usersCollection'), {
            id: user.uid,
            email: user.email,
            adresse: adresse,
            nom: nom,
            prenom: prenom,
        })
        navigation.navigate('Connexion', { email: email })
    }



    return (
        <View style={styles.container}>
            <TextInput placeholder='Nom' style={styles.input} onChangeText={onChangeNom}
                value={nom} />
            <TextInput placeholder='Prenom' style={styles.input} onChangeText={onChangePrenom}
                value={prenom} />
            <TextInput placeholder='Adresse' style={styles.input} onChangeText={onChangeAdresse}
                value={adresse} />
            <TextInput placeholder='Email' style={styles.input} onChangeText={onChangeEmail}
                value={email} />
            <TextInput placeholder='Mot de passe' secureTextEntry={true} style={styles.input} value={password} onChangeText={onChangePassword} />
            <Button onPress={inscription} title="Inscription" color="#841584" accessibilityLabel="Inscription" />

            {isValid ? <Text>Inscription réussi</Text> : <Text></Text>}
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
