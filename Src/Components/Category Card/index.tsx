import {Image, ImageSourcePropType} from 'react-native';
import {View} from 'react-native';
import {Text} from 'react-native';
import styles from './Style';
import ProductScreen from '../../Screens/ProductsScreen';

const CategoryCard = ({
  Title,
  source,
  
}: {
  Title: string;
  source?: ImageSourcePropType;
  
}) => {
  return (
    <View  style={styles.Container}>
      <Text style={styles.Titles}>{Title}</Text>
      <View>
      <Image style={styles.Images} source={source} />
      </View>
    </View>
  );
};

export default CategoryCard;
