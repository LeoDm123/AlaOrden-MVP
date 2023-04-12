import React from 'react'
import { View, Image } from 'react-native'

import {assets} from "../Constants";

export const HeaderIsoLogo = () => {
  return (
    <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        }}
    >
        <Image
        source={assets.logo3}
        resizeMode="cover"
        style={{ width: "85%", height: "100%" }}
        />   
    </View>    
  );
};

export const HeaderLogo = () => {
  return (
    <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        
        }}
    >
        <Image
        source={assets.logo1}
        resizeMode="cover"
        style={{ width: "85%", height: "100%" }}
        />   
    </View>    
  );
};

