
import {StyleSheet, Dimensions} from 'react-native';
import { vh, vw } from '../../Utils/helper';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  imageStyle: {
    height: height * 0.5, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  imageText: {
    color: 'white', 
    fontSize: 34, 
    fontWeight: 'bold', 
    textAlign: 'left', 
    marginLeft:vw*35,
    marginTop:vh*40,
  },
});
