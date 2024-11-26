import React, { ReactNode } from "react";
import {ActionSheetProvider} from "@expo/react-native-action-sheet";
import FullScreen from "../../containers/Fullscreen";

type ActionSheetComponentsProps = {
  children: ReactNode;
};

const ActionSheetComponent = ({ children }: ActionSheetComponentsProps) => {
  return (
    <FullScreen><ActionSheetProvider>{children}</ActionSheetProvider></FullScreen>
  )
};

export default ActionSheetComponent;
