import React, { useContext, useEffect, useState } from "react";
import {
    View,
    RefreshControl,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
    ScrollView,
    ImageBackground,
    StyleSheet,
    Dimensions,
} from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../../navigation/AuthProvider";
import { request } from "../../../helpers/request";
import { colors } from "../../../constants/color";
import CardComponentOrders from "./CardComponentOrders";
import { useRoute } from "@react-navigation/native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const GET_ORDERS = `query($clientId: ID){
    clients{
        clientId
      }
    orders(clientId: $clientId){
      orderId
         orderStatus
      orderTotalPrice
      orderCount
      orderSpecial
      orderBringTime
      orderDeliveryTime
      orderCreatedAt
    }
  }`;

const ClientOrders = ({ navigation, route }) => {
    console.log(route);
    const [fetchedData, setFetchedData] = useState(null);
    const [userToken, setUserToken] = useState();
    const [isLoading, setLoading] = useState(true);

    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        let cleanupFunction = false;
        const fetchData = async () => {
            try {
                const value = await AsyncStorage.getItem("staff_token");
                // const clientId = await AsyncStorage.getItem("clientId");
                setUserToken(value);
                let data = await fetch("https://pokiza.herokuapp.com/graphql", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        token: value,
                    },
                    body: JSON.stringify({
                        query: GET_ORDERS,
                        variables: { clientId: route.params.clientId },
                    }),
                });

                let jsonData = await data.json();
                if (!cleanupFunction) {
                    setFetchedData(jsonData.data.orders.reverse());

                    fetchedData
                        ? AsyncStorage.setItem(
                              "clientId",
                              fetchedData.clients[0].clientId
                          )
                        : null;
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
        return () => (cleanupFunction = true);
    }, []);

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        const value = await AsyncStorage.getItem("staff_token");
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
        <View style={styles.containerWrapper}>
            {isLoading ? (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ActivityIndicator
                        size="large"
                        color="#2196F3"
                        style={{ alignSelf: "center" }}
                    />
                </View>
            ) : (
                <>
                    {fetchedData.length > 0 ? (
                        <FlatList
                            data={fetchedData}
                            renderItem={({ item }) => (
                                <CardComponentOrders item={item} />
                            )}
                            keyExtractor={(item) => item.orderId}
                            style={styles.container}
                            contentContainerStyle={styles.contentStyle}
                            showsVerticalScrollIndicator={false}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                />
                            }
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
                                    source={require("../../../../assets/carpet.png")}
                                />
                            </View>
                        </ScrollView>
                    )}
                </>
            )}

            <TouchableOpacity
                style={styles.fab}
                onPress={() =>
                    navigation.navigate("AddOrderScreen", {
                        id: "ID: #329304",
                    })
                }
            >
                <MaterialIcons name="add" size={32} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default ClientOrders;

export const styles = StyleSheet.create({
    containerWrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        width: width,
        height: "100%",
        backgroundColor: "#fff",
    },
    contentStyle: {
        alignItems: "center",
        padding: 16,
    },
    emptyOrderView: {
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    emptyBox: {
        backgroundColor: colors.gray,
        height: 200,
        width: 200,
    },
    orderBox: {
        height: height / 3.3,
        width: width / 1.09,
        paddingHorizontal: 24,
        paddingVertical: 10,
        borderRadius: 10,
        justifyContent: "space-between",
        marginBottom: 16,
        backgroundColor: "#F4F4F5",
        overflow: "hidden",
    },
    first: {
        flex: 4,
        borderBottomColor: colors.gray,
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    second: {
        flex: 5,
        paddingVertical: 10,
        borderBottomColor: colors.gray,
        borderBottomWidth: 1,
    },
    third: {
        flex: 2,
    },
    orderNumber: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    orderStatusWrapper: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    orderNumberStyle: {
        fontWeight: "bold",
        fontSize: 18,
    },
    orderStatusText: {
        fontSize: 16,
    },
    orderStatus: {
        fontSize: 14,
        textAlign: "center",
        textAlignVertical: "center",
        padding: 5,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
    },
    orderRegisterBox: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    orderRegisterTextWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    orderRegisterText: {
        fontSize: 14,
        marginLeft: 5,
    },
    orderRegisterDate: {
        fontSize: 14,
    },
    summText: {
        fontSize: 14,
    },
    orderSumm: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.blue,
    },
    fab: {
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 28,
        right: 24,
        backgroundColor: "#007AFF",
    },
});
