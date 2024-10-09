import ProductImage from '../../Components/Product Main Image';
import {image} from '../../Assets/Images';
import ProductText from '../../Components/Product Text';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import ProductCard from '../../Components/Product Card';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {getStore} from '../../Services';

const ProductScreen = () => {
  const [products, setProducts] = useState([]);
  let pro = products;
  console.log("pro=====>",pro);
  const proArray = pro.products;
  console.log("proArray=====>",proArray);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStore();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', {item})}>
      <ProductCard  source={item.image ? { uri: item.image } : null} Texts={item.title} stext={item.price} />
    </TouchableOpacity>
  );
  return (
    <>
      <ProductImage source={image.street} Something="Street Clothes" />
      <ProductText
        Texts="Sale"
        SubText="View all"
        SmallText="Super summer sale"
      />
      <FlatList
        data={proArray}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${index}`}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
      />
    </>
  );
};

export default ProductScreen;
