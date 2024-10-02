import {Image, ImageSourcePropType, View} from 'react-native';
import { styles } from './Styles';

const DetailsImage = ({
  source,
  width,
  height,
  sources,
  widths,
  heights,
}: {
  source: ImageSourcePropType;
  width: number;
  height: number;
  sources: ImageSourcePropType;
  widths: number;
  heights: number;
}) => {
  return (
    <View style={{flexDirection:'row', }}>
      <Image style={styles.short} source={source} width={width} height={height} />
      <Image style={styles.image2} source={sources} width={widths} height={heights} />
    </View>
  );
};
export default DetailsImage;
