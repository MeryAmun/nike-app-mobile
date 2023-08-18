import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import CartListItem from "../Asset Bundle/CartListItem";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  cartSlice,
  selectDeliveryPrice,
  selectSubtotal,
  selectTotal,
} from "../redux/cartSlice";

const ShoppingCartScreen = () => {
  const { items } = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const cartSubTotal = useSelector(selectSubtotal);
  const deliveryPrice = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotal);

  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <CartListItem cartItem={item} />}
      ListFooterComponent={() => (
        <View style={styles.totalsContainer}>
          <View style={styles.row}>
            <Text style={styles.text}>Subtotal</Text>
            <Text style={styles.text}>{cartSubTotal} USD</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Delivery</Text>
            <Text style={styles.text}>{deliveryPrice} USD</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.textBold}>Total</Text>
            <Text style={styles.textBold}>{total} USD</Text>
          </View>
          <View style={styles.footer}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Checkout</Text>
            </Pressable>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 0,
    padding: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },
  footer: {
    // position:"absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    borderColor: "gainsboro",
    borderTopWidth: 1,
    padding: 20,
  },
  button: {
    width: "100%",
    backgroundColor: "black",
    alignSelf: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default ShoppingCartScreen;
