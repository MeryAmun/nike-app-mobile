import {
  Pressable,
  Text,
} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { ProductsScreen,ProductScreen,ShoppingCartScreen } from './src/screens';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';


export const Navigation = () => {
    const Stack = createNativeStackNavigator()
    const screenOptions = {
        headerShown: true,
      };
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions} initialRouteName='Products'>
          <Stack.Screen name="Products" component={ProductsScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <Pressable
                  onPress={() => navigation.navigate('Cart')}
                  style={{ flexDirection: 'row' }}
                >
                  <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                  <Text style={{ marginLeft: 5, fontWeight: '500' }}>
                    2
                  </Text>
                </Pressable>
              ),
              headerLeft: () => (
                <MaterialCommunityIcons
                style={{ marginRight: 10,}}
                  onPress={() => navigation.navigate('Track Order')}
                  name="truck-delivery"
                  size={22}
                  color="gray"
                />
              ),
            })}
          />
          <Stack.Screen name="Product Details" component={ProductScreen}
          
          />
          <Stack.Screen name="Cart" component={ShoppingCartScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }