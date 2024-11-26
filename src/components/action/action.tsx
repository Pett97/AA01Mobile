import { useActionSheet } from "@expo/react-native-action-sheet";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

type ActionProps = {
  optionsList: string[];
};

function Action({ optionsList }: ActionProps) {
  const router = useRouter();
  const { showActionSheetWithOptions } = useActionSheet();

  const onPress = () => {
    const options = optionsList;
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (selectedIndex: number) => {
        switch (selectedIndex) {
          case 0:
            if (router.canDismiss()) {
              router.dismissAll();
            }
            router.replace("/");
            break;
          case 1:
            break;
          case 2:
            router.replace("/about");
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
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
  },
  icon: {
    fontSize: 30,
    color: "white",
  },
});

export default Action;
