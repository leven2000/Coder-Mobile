import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Categories = () =>{
    return(
        <view style={styles.screen}>
            <text>Categories Screen</text>
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

export default Categories