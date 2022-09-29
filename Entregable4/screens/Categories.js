import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Categorias({navigation}){
    return(
        <view style={styles.screen}>
            <text>Categories Screen</text>
            <Button title="Ir a Panes" onPress={() => {
                navigation.navigate('Products')
            }}/>
        </view>
    );   
}

const style = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

