import React from "react";
import { View, Text, Image, TextInput, Share } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, FONTS, SIZES, assets, SHADOWS } from "../../Constants";
import { CircleButton, CartButton } from "../Button";

const DirectionsHeader = ({ onSearch }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        padding: SIZES.font,
        borderColor:COLORS.primary,
        borderBottomWidth:0.5,
      }}
    >
      <CircleButton
          imgUrl={assets.left}
          handlePress={() => navigation.goBack()}
          left={15}          
        />

      <CartButton
        right={15}
        handlePress={() => navigation.navigate("MyCart")}
      />      

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop:50,
        }}
      >
        <Image
          source={assets.logo3}
          resizeMode="cover"
          style={{ width: "85%", height: "100%" }}
        />        

        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.Leo}
            resizeMode="contain"
            style={{ width: "100%", height: "100%", borderRadius:"100%" }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 20,
              height: 20,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font, alignItems:"center" }}>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.primary,
            marginTop: SIZES.base / 2,
          }}
        >
          Contratá un envío
        </Text>
      </View>      
    </View>
  );
};

export default DirectionsHeader;