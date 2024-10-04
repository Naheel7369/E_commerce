import ProductIamge from '../../Components/Product Main Image';
import {image} from '../../Assets/Images';
import ProductText from '../../Components/Product Text';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import ProductCard from '../../Components/Product Card';
import {data} from '../../Utils/data';
import {useNavigation} from '@react-navigation/native';
import {Title} from 'react-native-paper';

const ProductScreen = () => {
  const navigation = useNavigation();
  // console.log(data,"data======>")
  const renderItem = ({item}: {item: any}) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', {item})}>
      <ProductCard source={item.source} Texts={item.title} stext={item.price} />
    </TouchableOpacity>
  );
  return (
    <>
      <ProductIamge
        source={image.street}
        Something="Street Clothes"></ProductIamge>
      <ProductText
        Texts="Sale"
        SubText="View all"
        SmallText="Super summer sale"></ProductText>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
      />
    </>
  );
};

export default ProductScreen;
