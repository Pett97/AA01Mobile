import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import FullScreen from '../src/containers/Fullscreen';
import Home from '../src/screens/home/home';
import AboutScreen from '../src/screens/about/about';

export default function App() {
  return (
    <FullScreen>
       <AboutScreen></AboutScreen>
    </FullScreen>
  );
}