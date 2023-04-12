import React, {useState, useEffect} from 'react';
import {View, TextInput, SafeAreaView, Image} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import DirectionsHeader from '../Headers/DirectionsHeader';
import { LogSearchButton } from "../Button";

import PlaceRow from "./PlaceRow";
import { COLORS, FONTS, SIZES, assets } from '../../Constants';




const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const DestinationSearch = (props) => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const navigation = useNavigation();

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResults', {
        originPlace,
        destinationPlace,
      })
    }
  }

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
        <DirectionsHeader/>
      <View style={{
        padding:SIZES.small/2,
        height:300,
      }}>
        <GooglePlacesAutocomplete 
          styles={{
            textInput:{fontSize:SIZES.medium, alignContent:"center", marginTop:10, marginLeft:10}, 
            textInputContainer:{
              backgroundColor:COLORS.lightGray, 
              borderRadius:200, 
              height:40,
              borderColor:COLORS.primary,
              borderWidth:0.5,
            }}}
          placeholder="Dirección de retiro"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          currentLocation={true}
          currentLocationLabel='Ubicación actual'          
          fetchDetails
          query={{
            key: 'AIzaSyDFhFUaYpyAjNE4Eq-sWCGWjrr6kyGnhbQ',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />

        <View style={{paddingVertical:10}}>
          <Image style={{
              resizeMode:"contain",
              width:"100%",
              height:60,      
          }}
            source={assets.Path}
          />
        </View>

        <GooglePlacesAutocomplete
          styles={{
            textInput:{fontSize:SIZES.medium, alignContent:"center", marginTop:10, marginLeft:10}, 
            textInputContainer:{
              backgroundColor:COLORS.lightGray, 
              borderRadius:200, 
              height:40,
              borderColor:COLORS.primary,
              borderWidth:0.5,
            }}}
          placeholder="Dirección de entrega"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles          
          fetchDetails
          query={{
            key: 'AIzaSyDFhFUaYpyAjNE4Eq-sWCGWjrr6kyGnhbQ',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        />
        <View/>
        <View style={{
          marginTop:20
        }}>
          <LogSearchButton
            handlePress={() => navigation.navigate("LogSearchResults")}
          />
        </View>      
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;