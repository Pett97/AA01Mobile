import { useActionSheet } from '@expo/react-native-action-sheet';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type ActionProps = {
  optionsList: string[];
};

function Action({ optionsList }: ActionProps) {
  const router = useRouter();
  const { showActionSheetWithOptions } = useActionSheet();

  const onPress = () => {
    const options = optionsList;
    const destructiveButtonIndex = 1; 

    showActionSheetWithOptions(
      {
        options,
        destructiveButtonIndex,
      },
      (selectedIndex: number) => {
        switch (selectedIndex) {
          case 0:
            router.replace("/about");
            break;
          case 1:
            router.replace("/");
            break;
          default:
            console.log("Nenhuma ação executada");
            break;
        }
      }
    );
  };

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.icon}>☰</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10, 
    backgroundColor: '#3498db',  
    justifyContent: 'center',
    alignItems: 'center',
    width: 50
  },
  icon: {
    fontSize: 30, 
    color: 'white', 
  },
});

export default Action;
