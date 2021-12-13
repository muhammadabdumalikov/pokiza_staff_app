import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ScrollView,
    RefreshControl,
    ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "../styles";
import { CardOrderComponent } from "../CardOrderComponent";
const OrderDetailScreen = ({ navigation, route }) => {
    console.log(route)

    const GET_ORDER_QUERY = `query($orderId: ID){
        orders(orderId: $orderId){
          orderId
          orderStatus
          orderTotalPrice
          orderProducts{
            productId
            productSize
            productPrice
            
          }
        }
      }`
    const DATA = [
        { id: "1", key: "1111" },
        { id: "2", key: "1111" },
        { id: "3", key: "1111" },
        { id: "4", key: "1111" },
    ];
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        const value = await AsyncStorage.getItem("user_token");
        let data = await fetch("https://pokiza.herokuapp.com/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: value,
            },
            body: JSON.stringify({
                query: GET_ORDERS,
                variables: null,
            }),
        });
        let jsonData = await data.json();

        setFetchedData(jsonData.data.orders.reverse());
        setRefreshing(false);
    }, []);

    return (
        // Orders with scrollable view ------------------------------------
        <View style={styles.containerAll}>
            <View style={styles.sumLine}>
                <Text style={styles.orderIdText}>Buyurtma - 2</Text>
                <Text style={styles.orderIdText}>#102921</Text>
            </View>
            <View style={[styles.sumLine, styles.orderBottom]}>
                <Text style={styles.orderStatus}>Buyurtma holati</Text>
                <Text style={styles.orderStatusTxt}>Jarayonda</Text>
            </View>
            <View style={styles.sumLine}>
                <Text style={styles.sumText}>
                    Umumiy <Text style={styles.sumNum}>120.000</Text> so'm
                </Text>
                <Text style={styles.outOfTurn}>
                    Tariff: <Text style={styles.outOfTurn}>Tezkor</Text>
                </Text>
            </View>
            {DATA ? (
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        <CardOrderComponent item={item} />
                    )}
                    keyExtractor={(item) => item.id}
                    style={styles.container}
                    contentContainerStyle={styles.contentStyle}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <ScrollView
                    contentContainerStyle={styles.emptyOrderView}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    <View style={styles.emptyBox}>
                        <ImageBackground
                            style={{ width: "100%", height: "100%" }}
                            source={require("../../../assets/carpet.png")}
                        />
                    </View>
                </ScrollView>
            )}
            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="ios-arrow-back" size={28} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default OrderDetailScreen;
