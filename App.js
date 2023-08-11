import { StyleSheet, View} from "react-native";
import { registerRootComponent } from 'expo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navigation } from "./Navigation";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Navigation/>
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
