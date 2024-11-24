import React, { useState } from 'react'
import {TextInput, View } from 'react-native'
import styles from './InputUser.style';

type InputUserProps ={
  user:string;
  onUserChange:(newUser:string)=>void;
};

function InputUser({user,onUserChange}:InputUserProps) {

  return (
    <View style={styles.input} >
      <TextInput onChangeText={onUserChange} value={user} placeholder='USERNAME'/>
    </View>
  )
}

export default InputUser