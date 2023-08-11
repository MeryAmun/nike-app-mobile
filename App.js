import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";
import { ProductsScreen,ProductScreen ,ShoppingCartScreen } from "./src/screens/index";

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingCartScreen/>
      {/* <ProductScreen/> */}
      {/* <ProductsScreen/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  }
});
