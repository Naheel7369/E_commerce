import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CategoriesScreen from '../../Screens/CategoriesScreen';
import CartScreen from '../../Screens/CartScreen';


const Tab = createBottomTabNavigator();



export function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'grey',
        tabBarActiveBackgroundColor: 'white',
        tabBarLabelStyle: {fontSize: 14},
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          borderTopWidth: 0,
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 0,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="home" color={color} size={size} />;
          },
          tabBarLabel: 'Home',
        }}
      />
     
      <Tab.Screen
      
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="bag" color={color} size={size} />;
          },
          tabBarLabel: 'Categories',
        }}
      />
      

      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="cart-outline" color={color} size={size} />;
          },
          tabBarLabel: 'Cart',
        }}
      />
    </Tab.Navigator>
  );
}
