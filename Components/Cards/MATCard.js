import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image } from "react-native";
import { useState, useEffect } from "react";

import { SIZES } from "../../Constants";
import { MATPrice, MATTitle } from "../SubInfo";
import { AddCartButton, BuyButton } from "../Button";
import { Items } from "../../Constants/Database";
import styles from "../../Constants/Styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const MATCard = ({ data }) => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  const getDataFromDB = async () => {
    let productList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == 'product') {
        productList.push(Items[index]);
      }
    }

    setProducts(productList);
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

  return (
    //Imagen del producto//
    <View style={styles.MATCard}>
        <TouchableOpacity 
          style={styles.ImgContainer}
          onPress={() => navigation.navigate("ProductInfo", {productID: data.id })}
          >
          <Image
            source={data.productImage}
            style={styles.ProdImg}
          />
        </TouchableOpacity>        


      {/* Titulo y subtitulo del producto */}
      <TouchableOpacity 
        style={styles.MatTitle}
        onPress={() => navigation.navigate("ProductInfo", {productID: data.id })}
        >
        <MATTitle
          title={data.productName}
          subTitle={data.presentation}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        {/* Precio del producto */}
        <MATPrice price={data.productPrice} />           
      </TouchableOpacity>

      <View style={styles.ButtonDisplay}>
        {/* Boton de agregar al carro */}
          <AddCartButton
            handlePress={() => (products.isAvailable ? addToCart(product.id) : null)}
          /> 

          {/* Boton de compra */}
          <BuyButton
            minWidth={120}
            marginHorizontal={10}            
          />
      </View>    
    </View>
  );
};

export default MATCard;