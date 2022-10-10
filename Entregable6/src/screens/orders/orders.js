import React from "react";
import { View, Text, Button, FlatList} from "react-native";
import { styles } from "./styles";
import { OrderItem } from "../../components/index";
import { orders } from "../../constants/data";

const Orders = ({navigation}) => {

    const onCancel = (id) => {
        console.warn(id);
    }
    const renderItem = ({item}) => <OrderItem item={item} onCancel={onCancel} />
    return (
        <View style={styles.container}>
            <FlatList 
                data={orders}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
};

export default Orders;