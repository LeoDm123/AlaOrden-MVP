
import React from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import {useNavigation} from '@react-navigation/native'
import { COLORS, FONTS, SIZES } from "../../Constants";


const HomeSearch = (props) => {
  const navigation = useNavigation();

  const goToSearch = () => {
    navigation.navigate('DestinationSearch')
  }

  return (
    <View style={{
      paddingVertical:SIZES.extraLarge,
      justifyContent:"space-evenly",
      padding:SIZES.small/2,
      borderRadius:200,
    }}>
      {/*  Input Box */}
      <TouchableOpacity style={{
        flexDirection:"row", 
        justifyContent:"space-between", 
        backgroundColor:COLORS.lightGray,
        borderColor:COLORS.primary,
        borderRadius:200,
        borderWidth:0.5,
        height:60,
        padding:SIZES.small/2,
        alignItems:"center"}}
        onPress={goToSearch}
      >
        <Text style={{
          fontFamily:FONTS.semiBold,
          fontSize:SIZES.medium,
          padding:10,
        }}>¿A dónde vamos?</Text>

        <View style={{
          flexDirection:"row",
          alignItems:"center",
          backgroundColor:COLORS.white,
          borderColor:COLORS.primary,
          borderWidth:0.5,
          height:40,
          width:100,
          borderRadius:30,
          justifyContent:"space-evenly",
        }}>
          <AntDesign name={'clockcircle'} size={20} color={COLORS.primary} />
          <Text style={{
            fontFamily:FONTS.regular
          }}>Ahora</Text>
          <MaterialIcons name={'keyboard-arrow-down'} size={16} />
        </View>
      </TouchableOpacity>

      <View style={{
        padding:SIZES.small/2,
        marginTop:10,
        borderColor:COLORS.primary,
        borderBottomWidth:1,        
      }}>
        <Text style={{
          fontFamily:FONTS.bold,
          fontSize:SIZES.large,
        }}>Destinos previos</Text>
      </View>

    <TouchableOpacity>
      <View style={{
        flexDirection:"row",
        padding:5,
        alignItems:"center",
        borderColor:COLORS.primary,
        borderWidth:0.5,
        marginTop:10,
        marginBottom:10,
        borderRadius:200,  
        }}>
        <View style={{padding:10}}>
          <AntDesign name={'clockcircle'} size={30} color={COLORS.primary} />
        </View>
        <Text style={{
          fontFamily:FONTS.semiBold,
          fontSize:SIZES.medium,
        }}>Country Los Olivos - Lote 113</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity>
      <View style={{
        flexDirection:"row",
        padding:5,
        alignItems:"center",
        borderColor:COLORS.primary,
        borderWidth:0.5,
        borderRadius:200,
        }}>
        <View style={{padding:10}}>
          <Entypo name={'home'} size={30} color={COLORS.primary} />
        </View>
          <Text style={{
            fontFamily:FONTS.semiBold,
            fontSize:SIZES.medium,
          }}>Corrientes 2151</Text>
        </View>
    </TouchableOpacity>
  </View>
    
  );
};

export default HomeSearch;