import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {

  const [loaded] = useFonts({
    Regular: require('./assets/fonts/Heebo-Regular.ttf'),
    Bold: require('./assets/fonts/Heebo-Bold.ttf'),
    Black: require('./assets/fonts/Heebo-Black.ttf'),
  });

  if (!loaded) return <AppLoading/>

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
