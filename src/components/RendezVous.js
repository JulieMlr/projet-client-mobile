import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from "react";
import { getDocs, query, collection, where } from 'firebase/firestore';
import { db } from '../firebase';

export default function RendezVous({ route, navigation }) {
    const [listRendezVous, setlistRendezVous] = useState(Array)

    const params = route.params.idUser

    useEffect(() => {
        const q = query(collection(db, "rendezVous"), where("idUser", "==", params));
        const fetchData = async () => {
          const docSnap = await getDocs(q);
          return docSnap
        }
        let listBis = []
        fetchData().then((res) => {
          res.forEach((r) => {
            listBis.push(r.data());
          })
          console.log(listBis)
          setlistRendezVous(listBis)
        }).catch((err) => {
          console.log(err)
        })
      }, [])

    return (
        <View style={styles.container}>
            {listRendezVous.map(elem => {
                return (
                    <Text>{elem.date}</Text>
                )
            })}
        </View>
    );
}

const styles = StyleSheet.create({
});
