import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import {ListItem} from "@react-native-material/core";
import { Directions } from "../../Constants";

import { COLORS, SIZES, FONTS, assets } from "../../Constants";

const CardDetails = ({Directions}) => {
  return (
    <View>
        <View>
            <Text style={{
                fontFamily:FONTS.bold,
                fontSize:SIZES.large,
                color:COLORS.primary,
                marginTop:10,
                marginStart:10,
            }}>Con crédito o débito</Text>
        </View>
      <ListItem
        leadingMode="image"
        leading={<Image 
        source={assets.Visa}
        style={{width:80, height:80, resizeMode:"contain"}}
        />}
        title="BBVA **** 3246"
        secondaryText="Crédito"
      />
      <ListItem
        leadingMode="image"
        leading={<Image 
        source={assets.VisaD}
        style={{width:80, height:80, resizeMode:"contain"}}
        />}
        title="BBVA **** 7883"  
        secondaryText="Débito"    
      />
      <ListItem
        leadingMode="image"
        leading={<Image 
        source={assets.MC}
        style={{width:80, height:80, resizeMode:"contain"}}
        />}
        title="Galicia **** 5898"
        secondaryText="Crédito"    
      />
      <ListItem
        leadingMode="image"
        leading={<Image 
        source={assets.MCD}
        style={{width:80, height:80, resizeMode:"contain"}}
        />}
        title="Galicia **** 1287"  
        secondaryText="Débito"    
      />
      <View>
            <Text style={{
                fontFamily:FONTS.bold,
                fontSize:SIZES.large,
                color:COLORS.primary,
                marginTop:10,
                marginStart:10,
                marginBottom:10,
            }}>Con efectivo</Text>
        </View>
        <ListItem
        leadingMode="image"
        leading={<Image 
        source={assets.money}
        style={{width:80, height:80, resizeMode:"contain"}}
        />}
        title="Con efectivo en el local"
      />
    </View>
  );
};

export default CardDetails;

