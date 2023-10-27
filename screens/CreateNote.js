import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Platform } from 'react-native';
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
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const onChange = (event, selectedDate) => {
    if (datePickerVisible) {
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
      setDatePickerVisible(false);
    }
  };

  const showDateTimePicker = (currentMode) => {
    setMode(currentMode);
    setShow(true);
  };

  const hideDateTimePicker = () => {
    setDatePickerVisible(false);
  };

  return (
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
          <View style={styles.inputDate}>
            <TextInput
              placeholder="Ingresa la fecha dd/mm/aa"
              style={styles.textoDate}
              value={fecha}
            />
            <TouchableOpacity
              style={styles.botonDate}
              onPress={() => showDateTimePicker('date')}
            >
              <Text style={styles.subtitle}>Fecha</Text>
            </TouchableOpacity>
          </View>
          {/* Contenedor de hora */}
          <View style={styles.inputDate}>
            <TextInput
              placeholder="Hora hh/mm"
              style={styles.textoDate}
              value={hora}
            />
            <TouchableOpacity
              style={styles.botonDate}
              onPress={() => showDateTimePicker('time')}
            >
              <Text style={styles.subtitle}>Hora</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.botonEnviar}>
              <Text style={styles.textoBtnEnviar}>Guardar</Text>
            </TouchableOpacity>
          </View>
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
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  },
  botonDate: {
    backgroundColor: '#006BA6',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 110,
    padding: 10,
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
});
