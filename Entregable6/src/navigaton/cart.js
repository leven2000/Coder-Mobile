import React from "react";
import{createNativeStackNavigator} from "@react-navigation/native-stack";

import{isAndroid} from '../utils/index'
import{Cart} from '../screens/index'
import { colors } from "../constants/themes";

const Stack = createNativeStackNavigator();


const CartNavigator = () => {
    return(
        <Stack.Navigator 
            initialRouteName="Cart"
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
            <Stack.Screen
                name="Cart"
                component={Cart}
            />
        </Stack.Navigator>
    )
}

export default CartNavigator;