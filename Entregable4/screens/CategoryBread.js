import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CategoryBread({navigation}){
    return(
        <view style={styles.screen}>
            <text>Category Breads</text>
            <Button title="Detalles" onPress={() => {
                navigation.navigate('Details')
            }}/>
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

