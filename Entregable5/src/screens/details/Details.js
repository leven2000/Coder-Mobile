import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./styles";
import {products} from '../../constants/data/index'

const Details = ({navigation, route}) =>{
    const {productId} = route.params;
    const product = products.find(product => product.id === productId);
    return (
        <View style={styles.container}>
            <Text>id: {product.id}</Text>
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text>${product.price}</Text>
            <Text>weight: {product.weight}</Text>
        </View>
    )  
};



export default Details