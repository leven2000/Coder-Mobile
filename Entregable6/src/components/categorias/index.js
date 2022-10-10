import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Categorias = ({item, onSelected}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={() => onSelected(item)}
                style={{...styles.contentContainer, backgroundColor: item.color}}
            >
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Categorias;