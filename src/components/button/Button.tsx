import React from 'react'
import { Image, ImageBackground, Text, TouchableOpacity } from 'react-native'
import IMAGES from '../../constants/images';
import styles from './button';

type buttonProps={
  imagePath:any,
  onPress:()=>void;
}

function Button({imagePath = IMAGES.NEXT,onPress}:buttonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ImageBackground
        source={imagePath}
        style={styles.backgroundImage}
      >
        <Text style={styles.buttonText}>Acessar</Text> 
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default Button;