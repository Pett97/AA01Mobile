import React, { ReactNode } from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'

type FullScreenProps ={
  children: ReactNode;
};

function FullScreen({ children }: FullScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  )
}

export default FullScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
