import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CategoryBread = () =>{
    return(
        <view style={styles.screen}>
            <text>Category Breads</text>
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

export default CategoryBread