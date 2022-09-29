import React from "react";
import{NavigationContainer} from "@react-navigation/native";
import{createNativeStackNavigator} from "@react-navigation/native-stack";

import Categories from "../screens/Categories";
import BreadDetails from "../screens/BreadDetails";
import CategoryBread from "../screens/CategoryBread";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="Home" component={Categories}/>
            <Stack.Screen name="Products" component={BreadDetails}/>
            <Stack.Screen name="Details" component={CategoryBread}/>            
        </Stack.Navigator>
    </NavigationContainer>
};

export default ShopNavigator;