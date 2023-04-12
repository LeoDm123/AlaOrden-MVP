import React from "react";
import { View, Text } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

const PlaceRow = ({ data }) => {
  return (
    <View>
      <View>
        {data.description === 'Home'
          ? <Entypo name='home' siz={20} color={'white'} />
          : <Entypo name='location-pin' siz={20} color={'white'} />
        }
      </View>
      <Text>{data.description || data.vicinity}</Text>
    </View>
  );
};

export default PlaceRow;