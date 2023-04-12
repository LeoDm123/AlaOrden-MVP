import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, ToastAndroid, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Items} from '../Constants/Database';
import {Stack} from "@react-native-material/core"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Counter, PayButton, ShopCartHeader } from '../Components';
import styles from '../Constants/Styles';
import { SIZES } from '../Constants';
import { TextInput } from 'react-native-gesture-handler';

const MyCart = ({navigation}) => {
  const [product, setProduct] = useState();
  const [total, setTotal] = useState(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get data from local DB by ID
  const getDataFromDB = async () => {
    let items = await AsyncStorage.getItem('cartItems');
    items = JSON.parse(items);
    let productData = [];
    if (items) {
      Items.forEach(data => {
        if (items.includes(data.id)) {
          productData.push(data);
          return;
        }
      });
      setProduct(productData);
      getTotal(productData);
    } else {
      setProduct(false);
      getTotal(false);
    }
  };

  //get total price of all items in the cart
  const getTotal = productData => {
    let total = 0;
    for (let index = 0; index < productData.length; index++) {
      let productPrice = productData[index].productPrice;
      total = total + productPrice;
    }
    setTotal(total);
  };

  //remove data from Cart
  const removeItemFromCart = async id => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      for (let index = 0; index < array.length; index++) {
        if (array[index] == id) {
          array.splice(index, 1);
        }

        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        getDataFromDB();
      }
    }
  };

  //checkout
  const checkOut = async () => {
    try {
      await AsyncStorage.removeItem('cartItems');
    } catch (error) {
      return error;
    }

    ToastAndroid.show('Items will be Deliverd SOON!', ToastAndroid.SHORT);

    navigation.navigate('Confirmation');
  };

  const renderProducts = (data, index) => {

    return(
      <Stack style={styles.CartRenderStack}>
        <TouchableOpacity 
          key={data.key}
          onPress={() => navigation.navigate('ProductInfo', {productID: data.id})}
          >
          <View>
              <Image
                source={data.productImage}
                style={styles.CartRenderImage}                
              />
          </View>
        </TouchableOpacity>
        <View style={{padding:SIZES.base}}>
          <View>
            <Text style={styles.CartRenderTitle}>{data.productName}</Text>
            <View style={{flexDirection:"row"}}>
              <Text style={styles.CartRenderPrice}>${data.productPrice}</Text>
            </View>
          </View>
          <View style={styles.CartRenderCounter}>
            <Counter/>
            <TouchableOpacity onPress={() => removeItemFromCart(data.id)}>
              <MaterialCommunityIcons
                name="delete-outline"
                style={styles.CartRenderRemove}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Stack>  
    );
  };

  return (
    <SafeAreaView>
      <ShopCartHeader/>
      <View style={{height:550}}>
      <ScrollView>            
        <View>
          {product ? product.map(renderProducts) : null}
        </View>
        <View>
          <View style={styles.CartView}>
            <Text style={styles.CartTitle}>Detalles de la compra</Text>
            <View style={styles.FormView}>
              <TextInput 
                style={styles.InputForm}
                placeholder='Dirección de entrega'
                />
                <TextInput 
                style={styles.InputForm}
                placeholder='Nombre de quién recibe'/>
                <TextInput 
                style={styles.InputForm}
                placeholder='Telefono de contacto'
                keyboardType='numeric'/>
                <TextInput 
                style={styles.InputForm}
                placeholder='Información adicional (opcional)'/>
            </View>
          </View>          
          <View style={styles.CartView}>
            <Text style={styles.CartTitle}>Información de compra</Text>
            <View
              style={styles.CartPricesView}>
              <Text style={styles.CartPriceM}>Subtotal</Text>
              <Text style={styles.CartPriceM}>$ {total}.00</Text>
            </View>
            <View style={styles.CartPricesView}>
              <Text style={styles.CartPriceS}>Costo de envío</Text>
              <Text style={styles.CartPriceS}>$ {total *0.2}</Text>
            </View>
            <View
              style={styles.CartPricesView}>
              <Text style={styles.CartPriceM}>Total</Text>
              <Text style={styles.CartPriceM}>$ {total + total *0.2}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      </View>
         

      <SafeAreaView style={styles.CartSafeAreaView}>
        <PayButton 
        handlePress={() => (total != 0 ? checkOut() : null)}
        total={total}/>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default MyCart;