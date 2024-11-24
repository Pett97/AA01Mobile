import React from 'react'
import { ImageBackground, Text, TouchableOpacity } from 'react-native'
import IMAGES from '../../constants/images';
import styles from './button';

type buttonProps={
  imagePath:any,
  text:string,
  onPress:()=>void;
}

function Button({imagePath,text,onPress}:buttonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ImageBackground
        source={imagePath}
        style={styles.backgroundImage}
      >
        <Text style={styles.buttonText}>{text}</Text> 
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default Button;