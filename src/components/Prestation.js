import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from "react";
import { getDocs, query, collection, where } from 'firebase/firestore';
import { db } from '../firebase';

export default function Prestation({ route, navigation }) {

    const [listDocteurs, setListDocteurs] = useState(Array)

    const params = route.params.idUser

    useEffect(() => {
        const fetchData = async () => {
            const docSnap = await getDocs(collection(db, "docteurCollection"));
            return docSnap
        }
        let listeBis = []
        fetchData().then((res) => {
            res.forEach((r) => {
                listeBis.push(r.data());
            })
            setListDocteurs(listeBis)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const rendezVous = () => {
        navigation.navigate('RendezVous', { idUser: params})
    }

    return (
        <View style={styles.container}>
            {listDocteurs.map(elem => {
                return (
                    <View>
                        <Text>{elem.nom}</Text>
                        <Text>{elem.adresse}</Text>
                    </View>
                )
            })}
            <Button onPress={rendezVous} title="Mes rendez-vous" color="#841584"  />
        </View>
    );
}

const styles = StyleSheet.create({
});
