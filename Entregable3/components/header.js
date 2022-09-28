import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../constants/colors";


const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.black,
        paddingTop: 30,
    },
    title: {
        fontSize: 30,
        color: colors.white,
        fontFamily: 'font'
    }
});



export default Header;