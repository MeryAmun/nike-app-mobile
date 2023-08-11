import {
  Pressable,
  Text,
  StyleSheet
} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { ProductsScreen,ProductScreen,ShoppingCartScreen } from './src/screens';
import { FontAwesome5 } from "@expo/vector-icons/FontAwesome5";


export const Navigation = () => {
    const Stack = createNativeStackNavigator()
    const screenOptions = {
        headerShown: true,
      };

      // const styles = StyleSheet.create({
      //   screenOptions:{
      //     headerShown: true,
      //   },
      // })
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions} 
        initialRouteName='Products'>
          <Stack.Screen name="Products" component={ProductsScreen}/>
          <Stack.Screen name="Product Details" component={ProductScreen}
          //  options={({ navigation }) => ({
          //   headerRight: () => (
          //     <Pressable
          //       onPress={() => navigation.navigate('Cart')}
          //       style={{ flexDirection: 'row' }}
          //     >
          //       <FontAwesome5 name="shopping-cart" size={18} color="gray" />
          //       <Text>1</Text>
          //     </Pressable>
          //   ),
          // })}
          />
          <Stack.Screen name="Cart" component={ShoppingCartScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }