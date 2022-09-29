import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BreadDetails = () =>{
    return(
        <view style={styles.screen}>
            <text>Category Screen</text>
        </view>
    )   
}

const style = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default BreadDetails