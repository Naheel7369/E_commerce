import { Image, ImageBackground, Text, View } from 'react-native';
import { image } from '../../Assets/Images';
import { styles } from './Style';
import { vh } from '../../Utils/helper';
import ImageBox from '../../Components/Image Component1';
import { Fonts } from '../../Assets/Fonts';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBox source={image.main} />
      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <Image source={image.image1} style={styles.hoddies} />
        </View>
        
        <View style={styles.textContainer}>
          <Text style={styles.imageText}>Summer Sale</Text>
          <ImageBackground source={image.image2} style={styles.woman} >
            <Text style={styles.TEXTS}>Black</Text>
            </ImageBackground>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

