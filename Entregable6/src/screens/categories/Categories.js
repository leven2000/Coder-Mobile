import React from "react";
import { FlatList} from "react-native";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";

import {Categorias} from "../../components/index"
import {selectedCategory} from "../../store/actions"

const Categories = ({navigation, route}) =>{
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.categories)
    
    const onSelected = (item) =>{
        dispatch(selectedCategory(item.id))
        navigation.navigate('Products', {name: item.title});
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


