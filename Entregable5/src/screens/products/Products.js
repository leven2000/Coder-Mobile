import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import {ProductItem} from "../../components/index";
import {products} from '../../constants/data/index'
import { styles } from "./styles";

const Products = ({navigation, route}) =>{
    const {categoryId} = route.params;

    const productFilter = products.filter(product => product.categoryId ===categoryId)
    const onSelected = (item) =>{
        navigation.navigate('Details', {name: item.title, productId: item.id});
    };
    
    const renderItem = ({item}) => <ProductItem item={item} onSelected={onSelected}/>

    return(
       <FlatList
            data={productFilter}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
       />
    )   
};



export default Products


