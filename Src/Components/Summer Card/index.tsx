import { Text, View } from "react-native";
import { styles } from "./Style";



const Summer = ({Des,Sub}:{Des:string,Sub:string}) =>{
    return(
    <View style={styles.Container}>
        <Text style={styles.Desc} >{Des}</Text>
        <View>
        <Text style={styles.subs}>{Sub} </Text>
        </View>
    </View>
    
    );
};
    
    
    
    export default Summer;