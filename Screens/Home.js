import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, SafeAreaView, Text, Image } from "react-native";
import styles from "../Constants/Styles";

import { FocusedStatusBar, HomeHeader } from "../Components";
import { MarketButton, LogisticButton } from "../Components/Button";
import { COLORS, SIZES, assets } from "../Constants";


const Home = () => {
    const navigation = useNavigation();
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.white} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
        </View>          
          <HomeHeader/>
          <View style={{
            justifyContent:"space-between",
            paddingVertical: SIZES.medium,
            paddingHorizontal: SIZES.small/2,
          }}>
            <MarketButton 
              handlePress={() => navigation.navigate("Market")}           
            />
            <LogisticButton 
              handlePress={() => navigation.navigate("LogisticsHome")}
            />
          </View>                   
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          
          <View
            style={{ height: 300, backgroundColor: COLORS.white }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;