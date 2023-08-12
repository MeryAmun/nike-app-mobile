import { StyleSheet, View} from "react-native";
import { registerRootComponent } from 'expo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navigation } from "./Navigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
   <Provider store={store}>
     <Navigation/>
   </Provider>
  );
}
registerRootComponent(App)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  }
});
