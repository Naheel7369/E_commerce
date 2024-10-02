
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './Style';
import { useNavigation } from '@react-navigation/native';

const Buttons = ({Custom}:{Custom:string}) => {
    const navigation = useNavigation();
    

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity  onPress={() =>
        navigation.navigate('CartScreen')}>
        <Text style={styles.buttonText}>{Custom}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
