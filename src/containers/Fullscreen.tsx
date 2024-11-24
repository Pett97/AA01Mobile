import React, { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

type FullScreenProps ={
  children:ReactNode;
};

function FullScreen({children}:FullScreenProps) {
  return (
    <View style ={styles.container}>
      {children}
    </View>
  )
}

export default FullScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
  }
});