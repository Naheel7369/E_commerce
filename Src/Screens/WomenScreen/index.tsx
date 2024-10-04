import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import CategoryCard from '../../Components/Category Card';
import {image} from '../../Assets/Images';
import Summer from '../../Components/Summer Card';
import {useNavigation} from '@react-navigation/native';
import {categories} from '../../Utils/data';

const WomenScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    if (item.isSale) {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('Product')}>
          <Summer Des={item.title} Sub={item.subtitle} />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('Product')}>
          <CategoryCard source={item.source} Title={item.title} />
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={{backgroundColor: '#e6e1e1', flex: 1}}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default WomenScreen;
