import React,{useState, useEffect} from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'


export default function Notas (props){
  
    return (
      <ScrollView >
        <View >
          <TouchableOpacity style={styles.botton} onPress={()=>props.navigation.navigate('Crear')} >
            <Text style={styles.textoBoton}>Nueva Nota</Text>
          </TouchableOpacity>
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
  }
})