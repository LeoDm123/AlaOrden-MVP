import React, {useState, useEffect} from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView, FlatList, Image, Dimensions, Animated, ToastAndroid, SafeAreaView} from 'react-native';
import {Items} from '../Constants/Database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DetailsHeader} from '../Components/Headers/DetailsHeader';
import { COLORS, SIZES, SHADOWS } from '../Constants';
import { AddCartButton } from '../Components';
import styles from '../Constants/Styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FloatingAction } from 'react-native-floating-action';


const ProductInfo = ({route, navigation}) => {
  const {productID} = route.params;

  const [product, setProduct] = useState({});

  const [count, setCount] = useState(1);

  const width = Dimensions.get('window').width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get product data by productID
  const getDataFromDB = async () => {
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].id == productID) {
        await setProduct(Items[index]);
        return;
      }
    }
  };

  
  //add to cart
  const addToCart = async id => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      array.push(id);

      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        ToastAndroid.show(
          'Item Added Successfully to cart',
          ToastAndroid.SHORT,
        );
        navigation.navigate('Market');
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      array.push(id);
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        ToastAndroid.show(
          'Item Added Successfully to cart',
          ToastAndroid.SHORT,
        );
        navigation.navigate('Market');
      } catch (error) {
        return error;
      }
    }
  };

  //Floating action sub-buttons
  const actions = [
    {
      text: "Agregar al Carrito",
      icon: require("../assets/icons/plus.png"),
      color:"#1B1B3D",
      position:1,
    },
  ]

  //product horizontal scroll product card
  const renderProduct = ({item, index}) => {
    return (
      <SafeAreaView>        
        <View
          style={styles.ProductSafeArea}>
          <Image
            source={item}
            style={styles.PhotoDisplay}
          />
        </View>
      </SafeAreaView>
    );
  };

  return (
    <View>
      <StatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />

      {/* Header */}
      <SafeAreaView>
            <DetailsHeader/>
      </SafeAreaView>

      {/* Slider de fotos */}
      <ScrollView
      style={{height:"100%"}}
      data={productID.bids}
      renderItem={({ item }) => <DetailsBid bid={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
      paddingBottom: SIZES.extraLarge * 3,
      }}>
        <View> 
          <FlatList
            data={product.productImageList ? product.productImageList : null}
            horizontal
            renderItem={renderProduct}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.8}
            snapToInterval={width}
            bounces={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}
          />
          <View style={styles.Display}>
            {product.productImageList
              ? product.productImageList.map((data, index) => {
                  let opacity = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0.2, 1, 0.2],
                    extrapolate: 'clamp',
                  });
                  return (
                    <Animated.View
                      key={index}
                      style={styles.ProductInfoAnimated}></Animated.View>
                  );
                }): null}
          </View>
        </View>
        <View style={styles.InfoDisplay}>          
          <View style={styles.InfoSubDisplay}>
            <Text style={styles.ProductName}>{product.productName}</Text>            
          </View>
          
          <Text style={styles.ProductPresentation}>{product.presentation}</Text>           

          
          <View style={{
            paddingVertical:SIZES.medium,           
            }}>
            <View style={styles.CounterAligment}>
              <View>            
                <Text style={styles.Price}>Precio: $ {product.productPrice*count}</Text>
              </View>
          
              {/* Contador */}
              <View style={styles.CounterView}>
                <View style={styles.CounterMinusView}>
                    <TouchableOpacity 
                    onPress={() => setCount(count-1)}
                    >
                        <MaterialCommunityIcons
                        name="minus"
                        style={styles.CounterIcon}/>
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
            </View>
          </View>

          {/* Descripción del producto */}
          <View>
            <Text style={styles.DescriptionTitle}>Descripción</Text>
            <Text style={styles.Description}>{product.description}</Text>
          </View>
        </View>
      </ScrollView>
      
      {/* Boton flotante */}
      <View 
        style={{position:"relative", 
        bottom:180,
        right:0,       
        }}>
        <FloatingAction
          actions={actions}
          color={COLORS.primary}
          onPressItem={() => (product.isAvailable ? addToCart(product.id) : null)}        
        />
      </View>
        
    </View>
  );
};

export default ProductInfo;

/*<View style={{
        width: "100%",
        position: "absolute",
        top: 750,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.5)",
        flex:1,
      }}>
        <AddCartButton
            keyExtractor={(item) => item.id}
            minWidth={170} 
            fontSize={SIZES.large} 
            {...SHADOWS.dark}
            backgroundColor={COLORS.primary}
            handlePress={() => (product.isAvailable ? addToCart(product.id) : null)}
          />
      </View>   */