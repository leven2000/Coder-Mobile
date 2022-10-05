import React from "react";
import { View, Text, Button} from "react-native";
import { styles } from "./styles";


const Categories = ({navigation}) =>{
    return(
        <View style={styles.screen}>
            <Text>Categories</Text>
            <Button
                title="Panes"
                onPress={()=> navigation.navigate("Products")}
            />
        </View>
    )   
}



export default Categories;


