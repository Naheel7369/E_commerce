import { StyleSheet } from "react-native";
import { Fonts } from "../../Assets/Fonts";

export const styles = StyleSheet.create({
    Conatiner: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: 10, 
        margin:'4%',
    },
    Txt: {
        fontSize: 28, 
        fontWeight: 'bold',
        color:'black' ,
        fontFamily:Fonts.MetrophobicRegular,

    },
    subs: {
        fontSize: 14, 
        color: 'gray', 
    },


});