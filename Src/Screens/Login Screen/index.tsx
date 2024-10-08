import React, {useEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {styles} from './Styles';
import Buttons from '../../Components/Button';
import {useDispatch} from 'react-redux';
import {loggedin, loggedout} from '../../Redux/AuthSlice';
import {fetchToken} from '../../Services';

const Log = ({navigation}: any) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const HomeHandler = async () => {
    if (!email || !password) {
      Alert.alert('Validation Error', 'Email and password are required.');
      return;
    }

    try {
      const response = await fetchToken(email, password);
      dispatch(loggedin({user: response.data.data.user, token: response.data.data.token}));
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Error', 'An error occurred during login.');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.Txts}>Login</Text>
      </View>
      <View style={styles.input}>
        <TextInput
          label="Email"
          mode="outlined"
          keyboardType="email-address"
          placeholder="Email"
          outlineColor="red"
          activeOutlineColor="grey"
          cursorColor="grey"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry
          placeholder="Enter your password"
          outlineColor="red"
          activeOutlineColor="grey"
          cursorColor="grey"
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Buttons Custom="Login" onPress={HomeHandler} />
    </View>
  );
};

export default Log;
