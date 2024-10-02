import {Image, ImageSourcePropType, Text, View} from 'react-native';
import { styles } from './Styles';

const ProductCard = ({
  source,
  Texts,
  stext,
}: {
  source: ImageSourcePropType;
  Texts: string;
  stext: string;
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={source} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>{Texts}</Text>
        <Text style={styles.subText}>{stext}</Text>
      </View>
    </View>
  );
};

export default ProductCard;
