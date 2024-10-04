import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../../Redux/Slic';
import { RootState } from '@reduxjs/toolkit/query/react';

const CartCard = ({
  id,
  Title,
  source,
  Price,
}: {
  id: string;
  Title: string;
  source: ImageSourcePropType;
  Price: number;
}) => {
  const dispatch = useDispatch();
  const quantity = useSelector((state: RootState) => {
    const item = state.cart.items.find((item: { id: string; }) => item.id === id);
    return item ? item.quantity : 0;
  });
  
  const handleIncrease = () => {
    dispatch(increaseQuantity({ id }));
  };
  const handleDecrease = () => {
    dispatch(decreaseQuantity({ id }));
  };

  return (
    <View style={styles.Container}>
      <View style={styles.TextContainer}>
        
        <Text style={styles.Titles}>{Title}</Text>
        <Text style={styles.Price}>${Price}</Text>
       
        <View style={styles.IconContainer}>
          <TouchableOpacity onPress={handleIncrease}>
            <Ionicons name="add" size={18} style={styles.Icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDecrease}>
            <Ionicons name="remove-sharp" size={18} style={styles.Icon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.Quantity}>Quantity: {quantity}</Text>
      </View>
      <Image style={styles.Images} source={source} />
    </View>
  );
};

export default CartCard;






