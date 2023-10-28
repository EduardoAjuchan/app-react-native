import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Platform, ScrollView, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function CreateNote(props) {
  const initialState = {
    titulo: '',
    detalle: '',
  };

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('empty');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [estado, setEstado] = useState(initialState);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    if (mode === 'date') {
      let fDate =
        tempDate.getDate() +
        '/' +
        (tempDate.getMonth() + 1) +
        '/' +
        tempDate.getFullYear();
      setFecha(fDate);
    } else if (mode === 'time') {
      let fTime =
        'Hora: ' + tempDate.getHours() + ':' + 'Minutos: ' + tempDate.getMinutes();
      setHora(fTime);
    }
  };

  const showDateTimePicker = (currentMode) => {
    setMode(currentMode);
    setShow(true);
  };

  const hideDateTimePicker = () => {
    setShow(false);
  };

 //boton cancelar debe limpiar el input de fecha y hora
  const cancelDateTimePicker = () => {
    setFecha('');
    setHora('');
    setShow(false);
  };

  const saveDateTimePicker = () => {
    setShow(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.contenedorPadre}>
        <View style={styles.tarjeta}>
          <View style={styles.contenedor}>
            <TextInput
              placeholder="Ingresa el titulo"
              style={styles.textoinput}
            />
            <TextInput
              placeholder="Ingresa la descripción"
              multiline={true}
              numberOfLines={4}
              style={styles.textoinput}
            />
            {/* Contenedor de la fecha */}
            
              <Pressable
              onPress={() => showDateTimePicker('date')}
              >
      
              <TextInput
              onPressIn={() => showDateTimePicker('date')}
                placeholder="Ingresa la fecha dd/mm/aa"
                style={styles.textoDate}
                value={fecha}
                editable={false}
  
              />
              </Pressable>
            
            {/* Contenedor de hora */}
           <Pressable
              onPress={() => showDateTimePicker('time')}
              >
              <TextInput
                onPressIn={() => showDateTimePicker('time')}
                placeholder="Hora hh/mm"
                style={styles.textoDate}
                value={hora}
                editable={false}
                
              />
              </Pressable>

            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="spinner"
                onChange={onChange}
                minimumDate={new Date('2023-01-01')}
              />
            )}
            {show && Platform.OS === 'ios' && (
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.pickerButton, { backgroundColor: '#11180711' }]
                }
                onPress={cancelDateTimePicker}
                >
                  <Text style={[styles.buttonText, { color: '#075985' }]}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.pickerButton, { backgroundColor: '#11180711' }]
                }
                onPress={saveDateTimePicker}
                >
                  <Text style={[styles.buttonText, { color: '#075985' }]}>Aceptar</Text>
                </TouchableOpacity>
              </View>
            )}
            <View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.textoBtnEnviar}>Guardar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  contenedorPadre: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tarjeta: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 4,
    elevation: 5,
  },
  contenedor: {
    padding: 20,
  },
  textoinput: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding: 2,
    marginBottom: 30,
    marginTop: 30,
  },
  inputDate: {
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  botonEnviar: {
    backgroundColor: '#00c6ab',
    width: '50%',
    borderRadius: 10,
    marginLeft: 70,
    marginRight: 100,
    marginTop: 30,
  },
  textoBtnEnviar: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
    fontSize: 16,
  },
  pickerButton: {
    paddingHorizontal: 20,
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: '#006BA6',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 14,
  },
  textoDate: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding: 2,
    marginBottom: 30,
    marginTop: 20,
    width: '100%',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
  },
});
