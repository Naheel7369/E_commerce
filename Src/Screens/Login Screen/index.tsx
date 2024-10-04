import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {styles} from './Styles';
import Buttons from '../../Components/Button';
import {useDispatch} from 'react-redux';
import {loggedin, loggedout} from '../../Redux/AuthSlice';
import {fetchToken} from '../../Services';

const Login = ({navigation}: any) => {
  const dispatch = useDispatch();
  const [email, setemail] = useState(''); 
  const [password, setPassword] = useState(''); 

  const HomeHAndler = async () => {
    const  token= await fetchToken();
      console.log('Token=====>', token); 
      
      if (token) {
        dispatch(loggedin( token )); 
        navigation.navigate('Home');
    } else {
        Alert.alert('Login Failed', 'Invalid email or password.');
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
          //   textColor="Red"
          keyboardType="default"
          placeholder="Email"
          outlineColor="red"
          activeOutlineColor="grey"
          cursorColor="grey"
          value={email}
          onChangeText={setemail}
        />

        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry
          placeholder="Enter your password"
          outlineColor="red"
          keyboardType="default"
          activeOutlineColor="grey"
          cursorColor="grey"
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Buttons Custom="Login" onPress={HomeHAndler} />
    </View>
  );
};

export default Login;
