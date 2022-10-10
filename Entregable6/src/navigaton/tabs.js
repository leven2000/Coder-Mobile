import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {EvilIcons} from "@expo/vector-icons"
import CartNavigator from "./cart";
import ShopNavigator from "./ShopNavigator";
import OrdersNavigator from "./orders";
import { colors } from "../constants/themes";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <BottomTab.Navigator
            initialRouteName="ShopTab"
            screenOptions={{
                headerShown: false,
            }}
        >
            <BottomTab.Screen
                name="ShopTab"
                component={ShopNavigator}
                options ={{
                    title: 'Shop',
                    tabBarIcon:({focused}) =>(
                        <EvilIcons 
                            name="sc-odnoklassniki" 
                            size={30} 
                            color={focused ? colors.secondary : colors.black}  
                        />
                    )
                }}
            />
            <BottomTab.Screen
                name="OrdersTab"
                component={OrdersNavigator}
                options ={{
                    title: 'Orders',
                    tabBarIcon:({focused}) =>(
                        <EvilIcons 
                            name="chart" 
                            size={30} 
                            color={focused ? colors.secondary : colors.black}  
                        />
                    )
                }}
            />
            <BottomTab.Screen
                name="CartTab"
                component={CartNavigator}
                options ={{
                    title: 'Cart',
                    tabBarIcon:({focused}) =>(
                        <EvilIcons 
                            name="cart" 
                            size={30} 
                            color={focused ? colors.secondary : colors.black} 
                        />
                    )
                }}
            />
        </BottomTab.Navigator>
    )
}

export default Tabs;