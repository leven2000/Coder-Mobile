import React from "react";
import{createNativeStackNavigator} from "@react-navigation/native-stack";

import{isAndroid} from '../utils/index'
import{Orders} from '../screens/index'
import { colors } from "../constants/themes";

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    return(
        <Stack.Navigator 
            initialRouteName="Orders"
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
                name="Orders"
                component={Orders}
            />
        </Stack.Navigator>
    )
}

export default OrdersNavigator;