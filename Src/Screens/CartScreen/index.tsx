import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CartCard from '../../Components/Cart Card';
import Buttons from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addItem, clearCart} from '../../Redux/Slic';

const CartScreen = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const totalAmount = cartItems.reduce((total, item) => {
    const priceValue =
      typeof item.price === 'string'
        ? parseInt(item.price.replace('$', ''))
        : typeof item.price === 'number'
        ? item.price
        : 0;
    return total + priceValue;
  }, 0);

  const init = () => {
    navigation.navigate('Payment');
  };

  return (
    <View style={styles.First}>
      <View style={styles.second}>
        <Text style={styles.Title}>My Bag</Text>
        <TouchableOpacity onPress={() => dispatch(clearCart())}>
          <Ionicons name="trash" size={34} />
        </TouchableOpacity>
      </View>
      <View>
        {cartItems.map(item => (
          <CartCard
            key={item.id}
            Title={item.title}
            source={item.image?{uri:item.image}:null}
            Price={item.price}
            id={item.id}
          />
        ))}
      </View>
      <View style={styles.checkout}>
        <Text style={styles.Amount}>Total Amount:</Text>
        <Text style={styles.Amount}>${totalAmount.toFixed(2)}</Text>
      </View>
      <View>
        <Buttons Custom="CHECK OUT" onPress={init} />
      </View>
    </View>
  );
};

export default CartScreen;
