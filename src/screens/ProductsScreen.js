import React from 'react'
import { StyleSheet, View, Image, FlatList,TouchableOpacity } from "react-native";
import products from '../data/products';

const ProductsScreen = ({navigation}) => (
  
  
     <FlatList
        data={products}
        renderItem={({ item }) => (
         <View style={styles.itemContainer}>
          <TouchableOpacity
           activeOpacity={1}
          key={item.key}
          onPress={() => navigation.navigate("Product Details",{item})}>
           <Image source={{ uri: item.image }} style={styles.image} />
           </TouchableOpacity>
         </View>
          )}
          numColumns={2}
      />

  )


export default ProductsScreen


const styles = StyleSheet.create({
    image: {
      width: "100%",
      aspectRatio: 1,
    },
    itemContainer:{
      width:"50%",
      padding:1
    }
  });