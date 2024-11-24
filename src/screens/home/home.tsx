import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import Button from '../../components/button/Button'
import IMAGES from '../../constants/images'
import InputUser from '../../components/InputUser/InputUser'
import styles from './home.style'
import InputPassword from '../../components/InputPassword/InputPassword';
import { validateLogin } from '../../services/checkLogin'


function Home() {

  const [user,setUser] = useState("");
  const [pwd,setPwd] = useState("");

  const handleUserChange = (newUser:string)=>{
    setUser(newUser);
  };

  const handlePwdChange = (newPwd:string)=>{
    setPwd(newPwd);
  }

  const handleLogin = ()=>{
    console.log(validateLogin(user,pwd));
  };

  return (
    <View style={styles.container}>
      <Image source={IMAGES.LOGO}/>
      <View style={styles.containerInput}>
        <View style={styles.input}>
        <InputUser user={user} onUserChange={handleUserChange}></InputUser>
        </View>
        <View style={styles.input}>
        <InputPassword pwd={pwd} onPwdChange={handlePwdChange} ></InputPassword>
        </View>
      </View>
      <Button imagePath={IMAGES.NEXT} onPress={handleLogin}></Button>
    </View>
  )
}

export default Home