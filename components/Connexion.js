import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React from "react";

export default function Connexion({ navigation }) {
    const [text, onChangeText] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [isValid, setIsValid] = React.useState(Boolean)

    const connexion = () => {
        setIsValid(true)
    }


    return (
        <View style={styles.container}>
            <TextInput placeholder='Email' style={styles.input} onChangeText={onChangeText}
                value={text} />
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
