import DetailScreen from '../../Screens/DetailsScreen';
import PaymentScreen from '../../Screens/PaymentScreen';
import ProductScreen from '../../Screens/ProductsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabNavigation} from '../BottomNavigation';
import WomenScreen from '../../Screens/WomenScreen';
import MenScreen from '../../Screens/MenScreen';
import KidsScreen from '../../Screens/KidsScreen';
import CategoriesScreen from '../../Screens/CategoriesScreen';

const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={BottomTabNavigation}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Product"
          component={ProductScreen}
          options={{headerShown: false}}
        />
        
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};
