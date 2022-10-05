import React from 'react';
import {useFonts} from 'expo-font';
import { ActivityIndicator } from 'react-native';

import AppNavigator from './navigaton';

export default function App(){
  const [loaded] = useFonts({     
    Regular: require('./assets/fonts/Heebo-Regular.ttf'),
    Bold: require('./assets/fonts/Heebo-Bold.ttf'),
    Black: require('./assets/fonts/Heebo-Black.ttf'),
  });

  if (!loaded){
    return <ActivityIndicator/>;
  }

  return(
    <AppNavigator/>
  );
}
