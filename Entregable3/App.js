import React, { useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import Header from './components/header';
import GameScreen from './screens/juego';
import StartGameScreen from './screens/start-game';
import { colors } from './constants/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});


export default function App() {
  const [userNumber, setUserNumber] = useState(0);

  const  title = !userNumber ? 'Adivina un numero' : 'Comienza el juego';
  
  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }



  let content = <StartGameScreen onStartGame={onStartGame} />
  
  if(userNumber) {
    content = <GameScreen selectedNumber={userNumber} />
  }
  
  return (
    <View style={styles.container}>
      <Header title={title} />
      {content}
    </View>
  );
}