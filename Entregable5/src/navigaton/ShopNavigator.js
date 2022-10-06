import React from "react";

import{createNativeStackNavigator} from "@react-navigation/native-stack";
import{isAndroid} from '../utils/index'

import { colors } from "../constants/themes";

import Categories from "../screens/categories/Categories";
import Details from "../screens/details/Details";
import Products from "../screens/products/Products";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return(
        <Stack.Navigator 
            initialRouteName="home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: isAndroid ? colors.primary : colors.secondary
                },
                headerTintColor: colors.black,
                headerTitleStyle:{
                    fontFamily: 'Bold'
                }
            }}
        >
            <Stack.Screen name="Home" component={Categories}/>
            <Stack.Screen 
                name="Products" 
                component={Products}
                
                options={({ route }) => ({
                    title: route.params.name
                })}
            />
            <Stack.Screen 
                name="Details" 
                component={Details}
                options={({ route }) => ({
                    title: route.params.name
                })}
            />            
        </Stack.Navigator>
    )
}

export default ShopNavigator;