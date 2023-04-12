import React from 'react'
import { View, Text } from 'react-native';

import { COLORS, FONTS, SIZES } from '../../Constants';

const renderProducts = (data, index) => {
  return(
    <Stack style={{
      flexDirection:"row",
      alignItems:"center",
      padding:SIZES.base,
    }}>
      <View style={{
        padding:SIZES.base,          
      }}>
        <View style={{}}>
          <Text
            style={{                
                fontFamily: FONTS.semiBold,
                fontSize: SIZES.large,
                color: COLORS.primary,
                maxWidth:280,
            }}>
            {data.productName}
          </Text>
          <View style={{
            flexDirection:"row",              
          }}>
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: SIZES.regular,
                color: COLORS.primary,
                maxWidth:280,
              }}>
              ${data.productPrice}
            </Text>
            <Text>
              (~$
              {data.productPrice + data.productPrice / 20})
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>       
        </View>
      </View>
    </Stack>  
  );
};

const PurchaseDetails = () => {
  return (
    <View style={{
        height:280,
        backgroundColor:COLORS.white,
        borderColor:COLORS.primary,
        borderWidth:0.5,
        borderRadius:SIZES.extraLarge,
        marginBottom:10,
        paddingVertical:SIZES.medium,
        paddingHorizontal:SIZES.small/2, 
      }}>
        <Text style={{
            fontSize:SIZES.large,
            fontFamily:FONTS.bold,
            padding:SIZES.base,
        }}>Detalle de la compra</Text>
      </View>
  )
}

export default PurchaseDetails;