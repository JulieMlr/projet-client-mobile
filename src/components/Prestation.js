import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useEffect, useState} from "react";
import { getDocs, query, collection, where } from 'firebase/firestore';
import { db } from '../firebase';

export default function Prestation({route, navigation }) {

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
            console.log(listDocteurs)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <View style={styles.container}>
           {listDocteurs.map(elem => {
            <Text>elem.nom</Text>
           })}
        </View>
    );
}

const styles = StyleSheet.create({
});
