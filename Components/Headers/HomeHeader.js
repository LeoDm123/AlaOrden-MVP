import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';
import { CartButton } from '../Button';
import styles from '../../Constants/Styles';

import { SIZES, assets } from "../../Constants";

function HomeHeader() {
  const navigation = useNavigation();
  return (
    <View style={styles.Header}>
      <CartButton
        right={15}
        handlePress={() => navigation.navigate("MyCart")}
      />  
      <View style={styles.LogoView}>
        <Image
          source={assets.logo}
          style={{ width: "100%", height: "100%" }}
        />        
      </View>

      <View>        
        <Text style={styles.HeaderTitle}>
          ¡Los materiales que necesitas, cuando los necesitas!
        </Text>
      </View>  
    </View>
  );
};

export default HomeHeader;