import React from 'react';
import { View, Text } from 'react-native';

import {assets} from "../Constants";

export const ProfileFoto = () => {
  return (
    <View
        style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        }}
    >
        <View style={{ width: 45, height: 45 }}>
            <Image
                source={assets.person01}
                resizeMode="contain"
                style={{ width: "100%", height: "100%" }}
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
  );
};
