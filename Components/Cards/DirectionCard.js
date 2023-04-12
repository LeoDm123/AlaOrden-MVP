import React from "react";
import { Text, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../../Constants/Styles";

import { assets } from "../../Constants";
import { CircleButton } from "../Button";
import DirectionDetails from "../Details/DirectionDetails";

export const DirectionCard = ({ minWidth, fontSize, handlePress, adress, name, map, instructions, ...props }) => {
  const navigation = useNavigation();

  return (
    <View
      style={styles.AdCardView}
      onPress={handlePress}
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
        <CircleButton
          imgUrl={assets.right}
          left={320}
          marginTop={40}
          handlePress={() => navigation.navigate("Directions")}
        />         
      </View>           
    </View>
  );
};

