
import { StyleSheet } from 'react-native';
import { Fonts } from '../../Assets/Fonts';

export const styles = StyleSheet.create({
  Hearts: {
    width: '13%',
    marginTop: 9,  
    backgroundColor: 'green',
  },
  Product: {
    marginTop: 10, 
    backgroundColor: 'red',
    
  },

  Conatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 10, 
    margin:'4%',
    backgroundColor:'red',
},
Txt: {
    fontSize: 15, 
    fontWeight: 'bold',
    color:'black' ,
    fontFamily:Fonts.MetrophobicRegular,

},
subs: {
    fontSize: 14, 
    color: 'gray', 
},

});
