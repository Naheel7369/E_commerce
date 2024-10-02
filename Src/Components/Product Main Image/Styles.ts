
import {StyleSheet, Dimensions} from 'react-native';
import { vh, vw } from '../../Utils/helper';
import { Fonts } from '../../Assets/Fonts';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  imageStyle: {
    height: height * 0.32, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  imageText: {
    color: 'white', 
    fontSize: 34, 
    fontWeight: 'bold', 
    textAlign: 'left', 
    marginRight:vw*33,
    marginTop:vh*18,
    fontFamily:Fonts.MetrophobicRegular,
  },
});