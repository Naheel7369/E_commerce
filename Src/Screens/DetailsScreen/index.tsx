import {useEffect} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DetailsImage from '../../Components/Details Image';
import {image} from '../../Assets/Images';
import Dropdown from '../../Components/Dropdown';
import {DressColors, Sizes} from '../../Utils/data';
import {styles} from './Style';
import ProductText from '../../Components/Product Text';
import Buttons from '../../Components/Button';
import {useDispatch} from 'react-redux';
import {addItem} from '../../Redux/Slic';

const DetailScreen = ({navigation, route}: any) => {
  const dispatch = useDispatch();
  const {item} = route.params;
  console.log('items=====>', item),
    useEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-sharp" size={26} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity>
            <Ionicons name="share-social-sharp" size={26} />
          </TouchableOpacity>
        ),
        headerTitle: 'Short Dress',
        headerTitleAlign: 'center',
      });
    }, [navigation]);
  const handleAddToCart = () => {
    dispatch(addItem(item));
    navigation.navigate('CartScreen');
  };

  return (
    <>
      <View style={{flex: 1}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          <DetailsImage
            source={item.image ? {uri:item.image}:null}
            width={490}
            height={400}
            sources={item.source}
            widths={80}
            heights={60}></DetailsImage>
        </ScrollView>

        <View
          style={{
            flexDirection: 'row',
            width: '45%',
            zIndex: 1,
          }}>
          <Dropdown items={Sizes} text="Select an Size" />
          <Dropdown items={DressColors} text="Select a Color" />
          <Image style={styles.herat} source={image.Heart} />
        </View>
        <View style={{marginTop: '8%'}}>
          <ProductText
            fontSize={28}
            Texts={item.title}
            SubText={item.price}
            SmallText="Short black dress"></ProductText>
          <Text style={styles.Txt}>
            Short dress in soft cotton jersey with decorative buttons down the
            front and a wide,with a small frill trim.
          </Text>
          <Buttons Custom={'ADD TO CART'} onPress={handleAddToCart} />
        </View>
      </View>
    </>
  );
};

export default DetailScreen;
