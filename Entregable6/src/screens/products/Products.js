import React, {useEffect} from "react";
import { View, Text, Button, FlatList } from "react-native";
import {ProductItem} from "../../components/index";
import {products} from '../../constants/data/index';
import { useSelector, useDispatch } from "react-redux";
import { styles } from "./styles";
import { filteredproducts, selectproduct} from "../../store/actions";

const Products = ({navigation}) =>{
    const dispatch = useDispatch()
    const selectedCategory = useSelector((state) => state.category.selected);
 
    const productFilter = useSelector((state) => state.products.filteredProducts);

    useEffect(() => {
        dispatch(filteredproducts(selectedCategory.id))
    }, [])

    const onSelected = (item) =>{
        dispatch(selectproduct(item.id))
        navigation.navigate('Details', {name: item.title});
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


