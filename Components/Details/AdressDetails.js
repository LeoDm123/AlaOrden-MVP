import React from "react";
import { Text, Image, View } from "react-native";
import styles from "../../Constants/Styles";


export const AdressDetails = ({ adress, name, map, instructions }) => {

  return (
      <View
        style={styles.AdCardView}        
      >
        <View style={styles.AdCardImgView}>
            <Image
            source={map}
            style={styles.AdCardImg}
            />
            <View>
            <Text style={styles.AdCardName}>{name}</Text>
            <Text style={styles.AdCardAdress}>{adress}</Text>
            <Text style={styles.AdCardInstructions}>{instructions}</Text>          
            </View>   
        </View>           
      </View>
  );
};
