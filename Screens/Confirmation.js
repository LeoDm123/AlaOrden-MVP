import React from 'react'
import { Text } from '@react-native-material/core'
import { SafeAreaView, View, Image } from 'react-native'
import { ConfirmationHeader, HomeButton, PurchaseDetails } from '../Components'
import { assets, COLORS, FONTS, SIZES } from '../Constants'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

const Confirmation = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <ConfirmationHeader/>
      </View>
      <View style={{
        alignItems:"center",
        paddingVertical:20,       
      }}>
        <Text style={{
          fontFamily:FONTS.semiBold,
          color:COLORS.primary,
          marginTop:150,
          marginBottom:20,
        }}>¡En breve nos comunicaremos contigo!</Text>

        <Image
          source={assets.OK}
          style={{marginBottom:20}}
        />        
      </View>             
      <View style={{
        paddingHorizontal:SIZES.small/2,
        marginTop:150
      }}>
          <HomeButton
            handlePress={() => navigation.navigate("Home")}
          />
        </View>      
    </SafeAreaView>
  )
}

export default Confirmation