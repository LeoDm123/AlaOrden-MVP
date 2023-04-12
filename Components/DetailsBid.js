import React from "react";
import { View, Text, Image } from "react-native";

import { MATPrice } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../Constants";

const DetailsBid = ({ bid }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base,
      }}
      key={bid.id}
    >
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{ width: 48, height: 48 }}
      />

      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          paddingHorizontal: SIZES.base,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
            color: COLORS.primary,
          }}
        >
          {bid.name}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.primary,
            marginTop: 3,
          }}
        >
          {bid.date}
        </Text>
      </View>

      <MATPrice price={bid.price} />
    </View>
  );
};

export default DetailsBid;