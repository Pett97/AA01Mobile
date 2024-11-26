import React from 'react';
import { Linking, Text, TouchableOpacity, View } from 'react-native';
import styles from './about.style';
import Button from '../../components/button/Button';
import IMAGES from '../../constants/images';
import ActionSheetComponent from '../../constants/actionSheet/actionSheet';
import Action from '../../components/action/action';
import Header from '../../components/header/header';
import FullScreen from '../../containers/Fullscreen';

function AboutScreen() {
  const handleURL = () => {
    Linking.openURL('https://github.com/Pett97/AA01Mobile');
  };

  return (
    <FullScreen>
      <View style={styles.link}>
      <View style={styles.header}>
            <Header>
            <ActionSheetComponent>
              <Action optionsList={["", "logout"]} />
            </ActionSheetComponent>
            </Header>
          </View>
      <Text style={styles.title}>AA01</Text>
      <View>
        <Text style={styles.version}>Versão 1.0</Text>
        <Text style={styles.developer}>developed by:</Text>
        <Text style={styles.developer}>Peterson Henrique de Padua</Text>
        <Button imagePath={IMAGES.GITLOGO} text="GITHUB" onPress={handleURL} />
      </View>
    </View>
    </FullScreen>
  );
}

export default AboutScreen;
