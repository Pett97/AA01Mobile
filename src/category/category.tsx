import React, { ReactNode } from "react";
import { Text, View } from "react-native";
import styles from "./category.style";

type CategoryProps = {
  name: string;
  children: ReactNode;
};
function Category({ name, children }: CategoryProps) {
  return (
    <View>
      <Text style={styles.name}>{name}</Text>
      {children}
    </View>
  );
}

export default Category;
