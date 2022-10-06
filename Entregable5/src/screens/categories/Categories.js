import React from "react";
import { View, Text, Button, FlatList} from "react-native";
import { styles } from "./styles";

import {Categorias} from "../../components/index"
import {categories} from "../../constants/data/index"

const Categories = ({navigation, route}) =>{
    const onSelected = (item) =>{
        navigation.navigate('Products', {name: item.title, categoryId: item.id});
    }
    const renderItem = ({item}) => <Categorias item={item} onSelected={onSelected}/>
    return(
        <FlatList
            data={categories}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            style={styles.containerList}
        />
    )   
};

export default Categories;


