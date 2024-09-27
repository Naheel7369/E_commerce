import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import WomenScreen from '../../Screens/WomenScreen';
import MenScreen from '../../Screens/MenScreen';
import KidScreen from '../../Screens/KidsScreen';
import CategoriesScreen from '../../Screens/CategoriesScreen';

const Tab = createMaterialTopTabNavigator();

export function TopTabs() {
  return (
    <Tab.Navigator
      initialRouteName= "WomenScreen"
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: 'white'},
      }}>
{/* 
<Tab.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{tabBarLabel: 'Women'}}
      /> */}
      <Tab.Screen
        name="Women"
        component={WomenScreen}
        options={{tabBarLabel: 'Women'}}
      />
      <Tab.Screen
        name="Men"
        component={MenScreen}
        options={{tabBarLabel: 'Men'}}
      />
      <Tab.Screen
        name="Kids"
        component={KidScreen}
        options={{tabBarLabel: 'Kids'}}
      />
    </Tab.Navigator>
  );
}
