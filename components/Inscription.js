import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React from "react";

export default function Inscription({ navigation }) {
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [nom, onChangeNom] = React.useState('');
    const [prenom, onChangePrenom] = React.useState('');
    const [adresse, onChangeAdresse] = React.useState('');
    const [isValid, setIsValid] = React.useState(Boolean)

    const inscription = () => {
        setIsValid(true)
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
