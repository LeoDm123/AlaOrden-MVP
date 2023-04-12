import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import styles from '../../Constants/Styles';


export const Counter = () => {
const [count, setCount] = useState(1)
    
  return (
    <View style={{
    flexDirection: 'row',
    alignItems: 'center',
    }}>
        <View style={styles.CounterMinusView}>
            <TouchableOpacity onPress={() => setCount(count-1)}>
                <MaterialCommunityIcons name="minus" style={styles.CounterIcon}/>
            </TouchableOpacity>            
        </View>
        <Text>{count}</Text>
        <View style={styles.CounterPlusView}>
            <TouchableOpacity
            onPress={() => setCount(count+1)}
            >
                <MaterialCommunityIcons
                name="plus"
                style={styles.CounterIcon}/>
            </TouchableOpacity>            
        </View>
    </View>
  )
}
