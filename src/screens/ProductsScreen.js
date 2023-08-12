import React from 'react'
import { StyleSheet, View, Image, FlatList,TouchableOpacity } from "react-native";
//import products from '../data/products';
import { useDispatch, useSelector } from 'react-redux';
import { productSlice } from '../redux/ProductSlice';

const ProductsScreen = ({navigation}) => { 
  const { products  } = useSelector((state) => state.products);
  const dispatch = useDispatch()

 return (
  <FlatList
        data={products}
        renderItem={({ item }) => (
         <View style={styles.itemContainer}>
          <TouchableOpacity
           activeOpacity={1}
          key={item.key}
          onPress={() => { 
            dispatch(productSlice.actions.setSelectedProduct(item.id)),navigation.navigate("Product Details")}}>
           <Image source={{ uri: item.image }} style={styles.image} />
           </TouchableOpacity>
         </View>
          )}
          numColumns={2}
      />

  )
}

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