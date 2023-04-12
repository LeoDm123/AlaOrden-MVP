import React from "react";
import { View, Text, Image, TextInput, Share } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../../Constants/Styles";
import Avatar from "../Headers/HeadersComponents/Avatar"

import { COLORS, FONTS, SIZES, assets, SHADOWS } from "../../Constants";
import { CircleButton } from "../Button";

const ShopCartHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Header2}>
      <CircleButton
          imgUrl={assets.left}
          handlePress={() => navigation.goBack()}
          left={15}          
        />     

      <View style={styles.HeaderPosition}>
        <Image
          style={styles.Logo3View}
          source={assets.logo3}          
        />
      </View>

      <View style={styles.HeaderTitleView}>
        <Text style={styles.HeaderTitle}>
          Carrito de compras
        </Text>
      </View>      
    </View>
  );
};

export default ShopCartHeader;
