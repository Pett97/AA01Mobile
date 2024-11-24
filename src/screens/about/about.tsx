import React from 'react'
import { Linking, Text, TouchableOpacity, View } from 'react-native'

function AboutScreen() {

  const handleURL = ()=>{
    Linking.openURL('https://www.google.com');
  }

  return (
    <View>
      <TouchableOpacity onPress={handleURL}><Text> Meu Projeto no GitHUB</Text></TouchableOpacity>
    </View>
  )
}

export default AboutScreen