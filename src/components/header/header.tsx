import React, { ReactNode } from "react";
import { Text, View } from "react-native";
import styles from "./header.style";

type HeaderProps = {
  children: ReactNode;
};

function Header({ children }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.nameScreen}>App Header</Text>
      </View>
      <View style={styles.containerAction}>{children}</View>
    </View>
  );
}

export default Header;
