import React from "react";
import { View, TextInput, Button } from "react-native";
import { styles } from "./styles";

const AddTask = ({item, onChangeText, placeHolder, OnPressButton, textButton}) => {
    return(
        <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        placeholder={placeHolder}
        selectionColor='#4A306D'
        placeholderTextColor='#4A306D'
        onChangeText={onChangeText}
        value={item}
        />
        <Button
        title={textButton}
        onPress={OnPressButton}
        />
      </View>
    )
}

export default AddTask;