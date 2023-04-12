import React from "react";
import { View, Text, Image, TextInput, Share } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, FONTS, SIZES, assets, SHADOWS } from "../../Constants";
import { CircleButton } from "../Button";

const ConfirmationHeader = () => {
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
          ¡Compra realizada!
        </Text>
      </View>      
    </View>
  );
};

export default ConfirmationHeader;
