import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";

const Products = ({navigation}) =>{
    return(
        <View style={styles.screen}>
            <Text>Products Screen</Text>
            <Button
                title="Detalles"
                onPress={()=> navigation.navigate("Details")}
            />  
        </View>
    )   
}



export default Products


