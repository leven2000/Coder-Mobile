import React from "react";

import{createNativeStackNavigator} from "@react-navigation/native-stack";

import Categories from "../screens/categories/Categories";
import Details from "../screens/details/Details";
import Products from "../screens/products/Products";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="Home" component={Categories}/>
            <Stack.Screen name="Products" component={Products}/>
            <Stack.Screen name="Details" component={Details}/>            
        </Stack.Navigator>
    )
}

export default ShopNavigator;