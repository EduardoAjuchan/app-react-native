import React,{useState, useEffect} from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'

import appFirebase from '../credenciales';
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore/lite';
import { ListItem } from '@rneui/themed'
import { ListItemChevron } from '@rneui/base/dist/ListItem/ListItem.Chevron';
const db = getFirestore(appFirebase);

export default function Notas (props){
    const [lista, setLista] = useState([]);

    useEffect(() => {
      const getLista = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'notas'));
          const docs = []
          querySnapshot.forEach((doc)=>{
            const {titulo, detalle, fecha, hora} = doc.data();
            docs.push({
              id: doc.id,
              titulo,
              detalle,
              fecha,
              hora,
            })
          })
          setLista(docs);
        }catch (error) {
          console.log(error);
        }
      }
      getLista();
    }
    , [lista])

    return (
      <ScrollView >
        <View >
          <TouchableOpacity style={styles.botton} onPress={()=>props.navigation.navigate('Crear')} >
            <Text style={styles.textoBoton}>Nueva Nota</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contenedor}>
          {lista.map((not)=>(
            <ListItem bottomDivider key={not.id}onPress={()=>{props.navigation.navigate('Detail',{
              notaId: not.id,
          })}}>
              <ListItemChevron />
              <ListItem.Content>
                <ListItem.Title style={styles.titulo}>{not.titulo}</ListItem.Title>
                <ListItem.Subtitle>{not.fecha}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
           ) )}
        </View>
      </ScrollView>
    )
  }

const styles = StyleSheet.create({
  botton:{
    backgroundColor: '#006BA6',
    borderRadius: 20,
    marginLeft: 100,
    marginRight: 100,
    marginTop: 10,
  },
  textoBoton:{
    textAlign: 'center',
    padding: 10,
    color: 'white',
    fontSize: 16,
  },
  contenedor:{
    margin:20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width:0, height:2},
    shadowOpacity: 0.26,
    shadowRadius: 4,
    elevation: 5,
  },
  titulo:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
})