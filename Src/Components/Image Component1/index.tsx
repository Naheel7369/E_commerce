import React from 'react';
import {View, Image, ImageBackground} from 'react-native';
import {styles} from './style';
import {Text} from 'react-native';

const ImageBox = ({source}: any) => {
  return (
    <ImageBackground style={styles.imageStyle} source={source}>
      <Text style={styles.imageText}>New Collection</Text>
    </ImageBackground>
  );
};

export default ImageBox;
