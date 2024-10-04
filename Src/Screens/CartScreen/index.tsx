import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CategoryCard from '../../Components/Category Card';
import {image} from '../../Assets/Images';
import CartCard from '../../Components/Cart Card';
import Buttons from '../../Components/Button';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, clearCart } from '../../Redux/Slic';

const CartScreen = ({route}:any) => {
  function init() {
  
      navigation.navigate('Payment')
  }
  // const{item}=route.params;
    const navigation=useNavigation();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const totalAmount = cartItems.reduce((total: number, item: { price: string; }) => {
      const priceValue = parseFloat(item.price.replace('$', '')); 
      return total + priceValue;
  }, 0);
  return (
    <View style={{marginTop:'20%',flex:1,}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <Text style={styles.Title}>My Bag</Text>
        <TouchableOpacity>
          <Ionicons name="trash" size={34}onPress={() => dispatch(clearCart())} />
        </TouchableOpacity>
      </View>
      <View>
      {cartItems.map((item) => (
                    <CartCard key={item.id} Title={item.title} source={item.source} Price={item.price} id={item.id}  />
                ))}
                
      </View>
      <View style={{flexDirection:'row', justifyContent: 'space-between',}}>
      <Text style={styles.Amount}>Total Amount:</Text>
      <Text style={styles.Amount}>${totalAmount}</Text>
      </View>
      <View >
      <Buttons Custom="CHECK OUT" onPress={init}/>
      </View>
    </View>
  );
};

export default CartScreen;
