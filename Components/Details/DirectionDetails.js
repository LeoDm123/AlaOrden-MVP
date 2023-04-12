import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Adress } from "../../Constants/AdressDB";
import styles from "../../Constants/Styles";
import { AdressDetails } from "../Details/AdressDetails";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const DirectionDetails = () => {
  
  const navigation = useNavigation();
  const [adress, setAdress] = useState();

  const saveAdress = (adress) => {
    setAdress(adress);
  };

  const handlePress = () => {
    setAdress(adress);
    alert(adress)
    navigation.navigate("Directions");
  };

  return (
    <View>
      {Adress.map(data => {
        return (
          <TouchableOpacity onPress={(handlePress)}>
            <View style={styles.AdCardFormat}>
            <AdressDetails 
                name={data.name}
                adress={data.adress}
                instructions={data.instructions}
                map={data.gpsImage} />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default DirectionDetails;