import { StyleSheet } from 'react-native';
import { vh } from '../../Utils/helper'; 
import { Fonts } from '../../Assets/Fonts';

export const styles = StyleSheet.create({
    imageText: {
        fontSize: 32, 
        marginLeft: 2, 
        color: 'red',
        fontWeight: 'bold',
        marginBottom: vh *1 , 
        marginTop:vh *2,
        fontFamily:Fonts.MetrophobicRegular,
    },
    hoddies: {
        width: vh*20,
        height: vh*50,
        marginLeft: vh*15.4,
    },
    woman: {
        width: 230,
        height: 200,
        marginTop: 138,
        marginLeft:2.9, 
        
    },
    container: {
        flex: 1,
        // backgroundColor: 'green',
    },
    row: {
        flexDirection: 'row-reverse',
        alignItems: 'center', 
    },
    imageContainer: {
        flex: 1,
        alignItems: 'flex-end',
        marginBottom: 20, 
    },
    textContainer: {
        flex: 1,
        marginLeft: 10, 
        marginTop:12,
    },

    TEXTS:{
     color:'white',
     fontWeight:'bold',
     fontSize:36,
     marginTop:100,
     marginLeft:20,
     fontFamily:Fonts.MetrophobicRegular,
     

    },
});
