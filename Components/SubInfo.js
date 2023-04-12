import React from "react";
import { View, Image, Text } from "react-native";

import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../Constants";

export const MATTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
          maxWidth:280,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}
      >
        {subTitle}
      </Text>
    </View>
  );
};

export const MATPrice = ({ price }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>      
      <Text
        style={{
          fontFamily: FONTS.bold,
          fontSize: SIZES.large+3,
          color: COLORS.primary,                
        }}
      >
        $ {price}
      </Text>
    </View>
  );
};

const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

export const PROV = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      {[assets.Bercovich, assets.Rosso, assets.Distlam].map(
        (imgUrl, index) => (
          <ImageCmp imgUrl={imgUrl} index={index} key={`PROV-${index}`} />
        )
      )}
    </View>
  );
};

/*export const EndDate = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        Ending in
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        12h 30m
      </Text>
    </View>
  );
};*/

export const SubInfo = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <PROV />      
    </View>
  );
};