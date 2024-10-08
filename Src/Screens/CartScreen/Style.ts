import { StyleSheet } from "react-native";
import { Fonts } from "../../Assets/Fonts";

export const styles = StyleSheet.create({

Title:{
fontSize:38,
fontWeight:'bold',
fontFamily:Fonts.MetrophobicRegular,
textAlign:"left",
color:'black'

},
Amount:{
fontSize:16,
fontFamily:Fonts.MetrophobicRegular,
color:'black',
fontWeight:'bold'
},

First:{marginTop:'20%',
     flex:1
    },

second:{flexDirection: 'row',
     justifyContent: 'space-between', 
     alignItems: 'center',
      marginBottom: 20
    },

    checkout:{
        flexDirection:'row', 
        justifyContent: 'space-between'
    },


});