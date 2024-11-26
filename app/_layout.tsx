import { Stack } from 'expo-router'
import React from 'react'
import ActionSheetComponent from '../src/constants/actionSheet/actionSheet'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'

function _layout() {
  return (
    <ActionSheetProvider>
      <Stack
      screenOptions={{
        headerShown:false
      }}
    />
    </ActionSheetProvider>
  )
}

export default _layout