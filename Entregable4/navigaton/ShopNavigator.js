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
            
        </Stack.Navigator>
    </NavigationContainer>
}