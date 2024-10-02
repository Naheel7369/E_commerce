import { ImageBackground, ImageSourcePropType, Text } from "react-native";
import { image } from "../../Assets/Images";
import { styles } from "./Styles";




const ProductIamge=({source,Something}:{source:ImageSourcePropType,Something:string})=>{
    return(
<ImageBackground source={source} style={styles.imageStyle}>
<Text style={styles.imageText}>{Something}</Text>

</ImageBackground>

);
};
export default ProductIamge;