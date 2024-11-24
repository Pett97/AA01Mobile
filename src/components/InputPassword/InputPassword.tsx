import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import styles from './InputPassword.style';

type InputPasswordProps ={
  pwd:string;
  onPwdChange:(newPwd:string)=>void;
}

function InputPassword({pwd,onPwdChange}:InputPasswordProps) {
  
  return (
    <View style={styles.input}>
      <TextInput secureTextEntry={true} placeholder='****' onChangeText={onPwdChange} value={pwd} />
    </View>
  )
}

export default InputPassword 