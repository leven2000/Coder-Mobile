import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import ShopNavigator from './navigaton/ShopNavigator'

export default function App() {

  const [loaded] = useFonts({
    Regular: require('./assets/fonts/Heebo-Regular.ttf'),
    Bold: require('./assets/fonts/Heebo-Bold.ttf'),
    Black: require('./assets/fonts/Heebo-Black.ttf'),
  });

  if (!loaded) return <AppLoading/>

  return (
    <ShopNavigator />
  );
}

const styles = StyleSheet.create({

});
