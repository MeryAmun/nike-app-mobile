import {
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
  Pressable,
  Text,
  FlatList,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const ProductScreen = ({navigation,route}) => {
  const { width } = useWindowDimensions();
  const addTToCart = () => {
    console.log(route)
  };

  return (
    <View>
      <ScrollView>
      <FlatList
        data={route.params.item.images}
        renderItem={({ item }) => (
          <Image
            source={{
              uri: item,
            }}
            style={{ width, aspectRatio: 1 }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
      <View style={styles.details}>
        <Text style={styles.name}>{route.params.item.name}</Text>
        <Text style={styles.price}>${route.params.item.price}</Text>
        <Text style={styles.description}>{route.params.item.description}</Text>
      </View>
      </ScrollView>
      <Pressable style={styles.button} onPress={addTToCart}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>

      <Pressable style={styles.icon} onPress={() => navigation.navigate("Products")}>
        <Ionicons name="close" size={24} color="white" />
      </Pressable>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  details: {
    display: "flex",
    // justifyContent:'center',
    // alignItems:'center',
    padding: 20,
    textAlign: "center",
  },
  name: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 25,
    fontWeight: "300",
  },
  button: {
    backgroundColor: "black",
     position: "absolute",
     bottom: 30,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 100,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
  icon: {
    position: "absolute",
    top: 50,
    right: 20,
    backgroundColor: "#000000AA",
    borderRadius: 50,
    padding: 5,
  },
});
