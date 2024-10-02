import { Text, TouchableOpacity, View } from "react-native";
import Summer from "../../Components/Summer Card";
import CategoryCard from "../../Components/Category Card";
import { image } from "../../Assets/Images";
import { useNavigation } from "@react-navigation/native";



const MenScreen = () => {
  const navigation = useNavigation();

  

  return ( 
    

    <View style={{backgroundColor: '#e6e1e1'}}>
        <TouchableOpacity  onPress={() =>
        navigation.navigate('Product')}>
        <Summer Des='SUMMER SALE' Sub='Up to 50% off'/>
        </TouchableOpacity >
        <TouchableOpacity onPress={() =>
        navigation.navigate('Product')}>
      <CategoryCard  source={image.jacket} Title="New"></CategoryCard>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>
        navigation.navigate('Product')}>
      <CategoryCard  source={image.jeans} Title="Clothes"></CategoryCard>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>
        navigation.navigate('Product')}>
      <CategoryCard Title="Shoes" source={image.shoes}></CategoryCard>
      </TouchableOpacity>
     <TouchableOpacity onPress={() =>
        navigation.navigate('Product')}>
      <CategoryCard Title="Accesories" source={image.nackles}></CategoryCard>
      </TouchableOpacity>
    </View>
  );

}

export default MenScreen;