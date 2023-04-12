import React from 'react'
import { View, Image, TextInput } from 'react-native'
import styles from '../../Constants/Styles'
import { assets, SIZES } from '../../Constants'


const SearchBar = ({onSearch}) => {
    
  return (
    <View style={{ marginTop: SIZES.font }}>
        <View style={styles.SearchBarPosition}>
          <Image
            style={styles.SearchBarLogo}
            source={assets.search}            
          />
          <TextInput
            placeholder="Buscar materiales"
            style={styles.SearchBarText}
            onChangeText={onSearch}
          />
        </View>
      </View>
  );
};

export default SearchBar