import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [sueldo, setSueldo] = useState('');
  const [sueldoNeto, setSueldoNeto] = useState('');

  const pressHandler = () => {
  
    if (!isNaN(parseFloat(sueldo))) {
      const isss = parseFloat(sueldo) * 0.03;
      const afp = parseFloat(sueldo) * 0.04;
      const renta = parseFloat(sueldo) * 0.05;

      const sueldoFinal = parseFloat(sueldo) - isss - afp - renta;


      setSueldoNeto(sueldoFinal.toFixed(2));
    } else {
      setSueldoNeto('');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.formulario}>
        <Text style={styles.texto}>
          Ingrese su salario base
        </Text>

        <TextInput
          value={sueldo.toString()}
          onChangeText={text => setSueldo(text)}
          editable={true}
          placeholder=''
          keyboardType='numeric'
        />

        <Button
          onPress={pressHandler}
          title="Calcular"
          color="#3a94c1"
        />

        <Text style={styles.sueldo}>Salario Liquido: $ {sueldoNeto}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  formulario: {
    width: 300,
    maxWidth: 300,
  },
  texto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
    fontWeight: '300'
  },
  sueldo: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: '500'
  }
});
