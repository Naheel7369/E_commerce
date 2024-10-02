import { StyleSheet } from "react-native";
import { Fonts } from "../../Assets/Fonts";

export const styles = StyleSheet.create({
Container: {
    width:'90%',
    alignItems: 'center',  
    padding: 10,          
    backgroundColor: 'red', 
    borderRadius: 5,       
    elevation: 1,   
    marginLeft:'7%',  
    margin:8,     
  },

Desc:{
    fontSize: 28,          
    color: 'white',
    fontFamily:Fonts.MetrophobicRegular,
    fontWeight:'bold', 
},
subs:{
    fontSize: 16,          
    color: 'white',
    fontFamily:Fonts.MetrophobicRegular,
    fontWeight:'bold', 
},

});



