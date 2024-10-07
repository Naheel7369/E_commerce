import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import CategoryCard from '../../Components/Category Card';
import Summer from '../../Components/Summer Card';
import { useNavigation } from '@react-navigation/native';
import { getStore } from '../../Services';
import { styles } from './Style';
import { image } from '../../Assets/Images';

const WomenScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]); 
  let temp=categories;
const tempArray=[temp]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStore();
        // console.log("data===>", data);
        setCategories(data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const renderItem = ({ item }) => {
    // console.log("return=====>", item);
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Product')}>
        <CategoryCard source={image.jacket} Title={item.name} />
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{ backgroundColor: '#e6e1e1', flex: 1 }}>
      <Summer Des="Summer Sale" Sub="upto 50% off" />

      <FlatList
        data={tempArray} 
        renderItem={renderItem}
        keyExtractor = {(item, index) => `${index}`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default WomenScreen;
