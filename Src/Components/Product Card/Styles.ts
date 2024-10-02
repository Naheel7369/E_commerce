import {StyleSheet} from 'react-native';
import { Fonts } from '../../Assets/Fonts';

export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
        padding: 16,
        margin: 8,
        alignItems: 'center',
        width:'81%',
        height:'auto',
    },
      imageContainer: {
        marginBottom: 10, 
      },
      image: {
        width: 150, 
        height: 200, 
        borderRadius: 6,
      },
      textContainer: {
        alignItems: 'center',
      },
      mainText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'black',
      },
      subText: {
        fontSize: 14,
        color: 'red',
        textAlign: 'center',
        alignSelf:'center',
},
});
