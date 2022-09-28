import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { colors } from "../constants/colors";


const Input = ({ style, ...props }) => {
    return (
        <TextInput {...props} style={{ ...styles.input, ...style }} />
    )
}


const styles = StyleSheet.create({
    input: {
        borderBottomColor: colors.gray,
        borderRadius: 10,
        borderBottomWidth: 10,
        marginVertical: 10,
        fontFamily: 'font'
    }
})


export default Input;