import React from "react";
import { View, Image, Text, Pressable } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

const VehicleTypeRow = (props) => {
  const {type, onPress, isSelected} = props;

  const getImage = () => {
    if (type.type === 'UberX') {
      return require('../../assets/images/UberX.jpeg');
    }
    if (type.type === 'Comfort') {
      return require('../../assets/images/Comfort.jpeg');
    }
    return require('../../assets/images/UberXL.jpeg');
  }

  return (
    <Pressable
      onPress={onPress}
      style={[, {
        backgroundColor: isSelected ? '#efefef' : 'white',
      }]}
    >

      {/*  Image */}
      <Image
        source={getImage()}
      />

      <View>
        <Text>
          {type.type}{' '}
          <Ionicons name={'person'} size={16} />
          3
        </Text>
        <Text>
          8:03PM drop off
        </Text>
      </View>
      <View>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text>est. ${type.price}</Text>
      </View>
    </Pressable>
  );
};

export default VehicleTypeRow;