import { Text, View } from "react-native";
import { styles } from "./Style";
import Ionicons from "react-native-vector-icons/Ionicons";



const CartScreen = () => {
return(
<View style={{flexDirection:'row',marginTop:'20%'}}>
    <Text style={styles.Title}>My Bag</Text>
    <View >
    <Ionicons name='trash' size={34}/>
    </View>
</View>

);

}

export default CartScreen;