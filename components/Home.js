import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React from "react";

export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <Button onPress={() => navigation.navigate('Connexion')} title="Connexion" color="" accessibilityLabel="Connexion" />
            <Button onPress={() => navigation.navigate('Inscription')} title="Inscription" color="" accessibilityLabel="Inscription" />
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
