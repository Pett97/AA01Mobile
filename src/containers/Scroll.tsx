import React, { ReactNode } from "react";
import { ScrollView } from "react-native";

type ScrollProps = {
  children: ReactNode;
};
function Scroll({ children }: ScrollProps) {
  return <ScrollView>{children}</ScrollView>;
}

export default Scroll;
