import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, ScrollView, Image, Text} from 'react-native';
import { MarketHeader, MATCard } from '../Components';
import { Items } from '../Constants/Database'; 
import styles from '../Constants/Styles';
import { assets } from '../Constants';
import { CtgyButton } from '../Components/Button';



const Market = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [cat,setCat] = useState('Todos');

 const handleSearch = (value) => {
    if (value.length === 0) {
      setProducts(Items);
    }

    const filteredData = Items.filter((item) =>
      item.productName.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setProducts(Items);
    } else {
      setProducts(filteredData);
    }
  };

  //get called on screen loads
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get data from DB

  const getDataFromDB = async () => {
    let productList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category.includes([cat]))  {
        productList.push(Items[index]);
      } 
    }

    await setProducts(productList);
  };

  //filter products with buttons

  useEffect(() => {getDataFromDB()}, [cat]);
    

  return (
    <View>
      <SafeAreaView>
        <MarketHeader onSearch={handleSearch} />

        <View style={styles.HorizontalDisplay}>
          <Image source={assets.left} style={styles.Arrows}/>
          <View 
          style={styles.CatButtonDisplay}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <View style={styles.Button}>
                      <CtgyButton imgUrl={assets.AllMats} handlePress={() => setCat("Todos")}
                      />
                  </View>
                  <View style={styles.Button}>
                      <CtgyButton imgUrl={assets.Brick} handlePress={() => setCat("Ladrillo")}
                      />
                  </View>
                  <View style={styles.Button}>
                      <CtgyButton imgUrl={assets.Cement} handlePress={() => setCat("Cemento")}/>
                  </View>
                  <View style={styles.Button}>
                      <CtgyButton imgUrl={assets.Coil} handlePress={() => setCat("Alambre")}/>
                  </View>
                  <View style={styles.Button}>
                      <CtgyButton imgUrl={assets.IronBar} handlePress={() => setCat("Hierro")}/>
                  </View>
                  <View style={styles.Button}>
                      <CtgyButton imgUrl={assets.Beam} handlePress={() => setCat("Estructurales")}/>
                  </View>
                  <View style={styles.Button}>
                      <CtgyButton imgUrl={assets.Electric} handlePress={() => setCat("Electricos")}/>
                  </View>
                  <View style={styles.Button}>
                      <CtgyButton imgUrl={assets.Floor} handlePress={() => setCat("Pisos")}/>
                  </View>
                  <View style={styles.Button}>
                      <CtgyButton imgUrl={assets.Joint} handlePress={() => setCat("Tornillos")}/>
                  </View>
                  <View style={styles.Button}>
                      <CtgyButton imgUrl={assets.Paint} handlePress={() => setCat("Pintura")}/>
                  </View>
                  <View style={styles.Button}>
                      <CtgyButton imgUrl={assets.Tools} handlePress={() => setCat("Herramientas")}/>
                  </View>
                  <View style={styles.Button}>
                      <CtgyButton imgUrl={assets.Window} handlePress={() => setCat("Aberturas")}/>
                  </View>
            </ScrollView>        
          </View>
          <Image source={assets.right} style={styles.Arrows}/>
        </View>
      </SafeAreaView>

      <View>
        <Text style={styles.CatTitle}>Categoría: {cat}</Text>
      </View>

      <View style={{height:450}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View>
              {products.map(data => {
                return <MATCard data={data} key={data.id} />;
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Market;
