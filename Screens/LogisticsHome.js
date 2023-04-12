import React from "react";
import { View, SafeAreaView, Text, TextInput } from "react-native";
import DirectionsHeader from "../Components/Headers/DirectionsHeader";
import styles from "../Constants/Styles";
import { ServiceButton } from "../Components/Button";

const LogisticsHome = (props) => {
  return (
    <SafeAreaView>
    <DirectionsHeader/>
      <View style={styles.CartView}>
        <Text style={styles.CartTitle}>¿A donde vamos?</Text>
        <View style={styles.FormView}>
          <TextInput 
            style={styles.InputForm}
            placeholder='Dirección de retiro'/>
          <TextInput 
            style={styles.InputForm}
            placeholder='Dirección de entrega'/>
        </View>
        <Text style={styles.CartTitle}>Contanos un poco más sobre lo que queres enviar</Text>
        <View style={styles.FormView}>
          <TextInput 
            style={styles.InputForm}
            placeholder='Peso de la carga (aprox.)'
            keyboardType='numeric'/>
            <TextInput 
            style={styles.InputForm}
            placeholder='Volumen de la carga (aprox.)'
            keyboardType='numeric'/>
          <TextInput 
            style={styles.InputForm}
            placeholder='Descripción breve de la carga'/>
        </View>
        <Text style={styles.CartTitle}>Datos adicionales</Text>
        <View style={styles.FormView}>
          <TextInput 
            style={styles.InputForm}
            placeholder='Nombre y apellido de quien recibe'/>
          <TextInput 
            style={styles.InputForm}
            placeholder='Telefono de contacto (WhatsApp)'
            keyboardType='numeric'/>
          <TextInput 
            style={styles.InputForm}
            placeholder='Información que creas relevante'/>
        </View>
      </View>
      <SafeAreaView style={styles.LogisticSafeAreaView}>
        <ServiceButton/>
      </SafeAreaView>    
    </SafeAreaView>
  );
};

export default LogisticsHome;