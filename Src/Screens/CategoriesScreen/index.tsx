import React, { useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TopTabs } from '../../Navigation/Material Top Tab Navigator';

const CategoriesScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-sharp" size={26} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity>
          <Ionicons name="search" size={26} />
        </TouchableOpacity>
      ),
      headerTitle:'Categories',
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  return (


   <TopTabs/>
  );
};

export default CategoriesScreen;
