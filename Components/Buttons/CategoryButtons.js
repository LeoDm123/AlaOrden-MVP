import React from 'react'
import { ScrollView, View, Image, Text } from 'react-native'
import { assets } from '../../Constants'
import { CtgyButton } from '../Button'
import styles from '../../Constants/Styles'
import { useState } from 'react'

const CategoryButtons = () => {

const [cat,setCat] = useState([]);


  return (

    <View style={styles.HorizontalDisplay}>
      <Image source={assets.left} style={styles.Arrows}/>
      <View 
      style={styles.CatButtonDisplay}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
      <Text>{cat}</Text>
    </View>
  )
}

export default CategoryButtons