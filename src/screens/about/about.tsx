import React from 'react'
import { Linking, Text, TouchableOpacity, View } from 'react-native'
import styles from './about.style';
import Button from '../../components/button/Button';
import IMAGES from '../../constants/images';

function AboutScreen() {

  const handleURL = ()=>{
    Linking.openURL('https://github.com/Pett97/AA01Mobile');
  }

  return (
    <View style={styles.link}>
      <Button imagePath={IMAGES.GITLOGO} text='GITHUB' onPress={handleURL}></Button>
    </View>
  )
}

export default AboutScreen