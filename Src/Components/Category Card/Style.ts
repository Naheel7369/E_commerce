import { StyleSheet } from 'react-native';
import { Fonts } from '../../Assets/Fonts';

const styles = StyleSheet.create({
  Container: {
    width:'90%',
    flexDirection: 'row', 
    alignItems: 'center',  
    padding: 10,          
    backgroundColor: '#ffffff', 
    borderRadius: 5,       
    elevation: 1,   
    marginLeft:'7%',  
    margin:8,     
  },
  Titles: {
    flex: 1,               
    fontSize: 20,          
    color: 'black',
    fontFamily:Fonts.MetrophobicRegular,
    fontWeight:'bold',         
  },
  Images: {
    width: 140,             
    height: 100,            
    marginLeft: 10,  
    borderRadius: 5,   
},
});

export default styles;
