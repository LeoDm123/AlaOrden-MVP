import React from "react";
import { Text, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, FONTS, SHADOWS, assets } from "../../Constants";
import { CircleButton } from "../Button";


const CardsCard = ({ minWidth, fontSize, handlePress, ...props }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.extraLarge,
        width:"100%",
        borderEndColor:COLORS.primary,
        borderWidth:0.5,
        ...SHADOWS.light,
        ...props,
      }}
    >
      <View style={{
        flexDirection:"row",
        maxWidth:200,
        padding:SIZES.base,
        alignItems:"center",
      }}>
        <Image
          source={assets.Visa}
          style={{
            width:60, 
            height:60,
            resizeMode:"contain",
            borderRadius:SIZES.extraLarge,
            marginStart:20
          }}
        />
        <View>
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.regular,
              color: COLORS.primary,
              marginStart:30,
              marginTop:5,
            }}
          >
            VISA Debito **** 7883 
          </Text>          
        </View>
        <CircleButton
          imgUrl={assets.right}
          left={320}
          marginTop={20}
          handlePress={() => navigation.navigate("CreditCards")}
        />         
      </View>           
    </View>
  );
};

export default CardsCard;