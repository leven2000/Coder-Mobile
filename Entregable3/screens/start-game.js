import React, { useState} from "react";
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from "react-native";
import Card from "../components/card";
import Input from "../components/input";
import NumberContainer from "../components/container-nums";
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 10,
    },
    title: {
        fontSize: 20,
        color: colors.text,
        textAlign: 'center',
        paddingVertical: 20,
        fontFamily: 'font',
    },
    label: {
        fontSize: 14,
        color: colors.text,
        textAlign: 'center',
        paddingVertical: 5, 
        fontFamily: 'font',
        borderRadius: 60,
    },
    inputContainer: {
        width: 320,
        maxWidth: '80%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        borderRadius: 60,
    },
    input: {
        width: '100%',
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        maxWidth: 70,
        fontSize: 25,
        paddingVertical: 10,
        textAlign: 'center',
        fontFamily: 'font',
    },
    buttonContainer: {
        width: '80%',
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        borderRadius: 80,
    },
    summaryContainer: {
        width: '80%',
        height: 180,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        marginTop: 20,
    },
    summaryText: {
        fontSize: 18,
        fontFamily: 'font',
    }
});

const StartGameScreen = ({onStartGame}) => {
    const [number, setNumber] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(0);
    
    const onHandleChange = (text) => {
        setNumber(text.replace(/[^0-9]/g, ''));
    }

    const onReset = () => {
        setNumber('');
        setSelectedNumber(0);
        setConfirmed(false);
        Keyboard.dismiss()
    }

    const onConfirm = () => {
        const chosenNumber = parseInt(number, 10);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) return;
        setConfirmed(true);
        setSelectedNumber(chosenNumber)
        setNumber('');
    }

    const onHandleStartGame = () => {
        onStartGame(selectedNumber);
    }

    const comfirmedOutput = () =>  confirmed && (
        <Card style={styles.summaryContainer}>
            <Text style={styles.summaryText}>Tu seleccion</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <View style={styles.buttonContainer}>
                <Button 
                    title="Limpiar"
                    onPress={onReset}
                    color={colors.primary}
                />
                <Button
                    title="Iniciar Juego"
                    onPress={onHandleStartGame}
                    color={colors.primary}
                />
              
            </View>
        </Card>
    )
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
            <Text style={styles.title}>Comenzar juego</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.label}>Elija un numero</Text>
                <Input 
                    style={styles.input} 
                    keyboardType='numeric' 
                    maxLength={2}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(text) => onHandleChange(text)}
                    value={number}
                />
                <View style={styles.buttonContainer}>
                  
                    <Button
                        title="Confirmar"
                        onPress={onConfirm}
                        color={colors.secondary}
                    />
                </View>
            </Card>
            {comfirmedOutput()}
        </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGameScreen;