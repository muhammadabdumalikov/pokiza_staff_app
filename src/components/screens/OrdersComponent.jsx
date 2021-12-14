import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ScrollView,
    RefreshControl,
    ImageBackground,
    ActivityIndicator,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "../styles";
import { CardOrderComponent } from "../CardOrderComponent";
import { colors } from "../../constants/color";
const OrderDetailScreen = ({ navigation, route }) => {
    const GET_ORDER_QUERY = `query($orderId: ID){
        orders(orderId: $orderId){
          orderId
          orderStatus
          orderTotalPrice
          orderProducts{
            productId
            productSize
            productPrice
            productCount
            productName
            productPhoto
            productStatus
          }
        }
      }`;

    const orderId = route.params.order.orderId;
    const order = route.params.order;

    const [refreshing, setRefreshing] = useState(false);
    const [fetchedData, setFetchedData] = useState();
    const [isLoading, setLoading] = useState(true);

    const statusStyles = {
        1: {
            style: {
                fontSize: 14,
                textAlign: "center",
                textAlignVertical: "center",
                padding: 5,
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: "white",
                color: "black",
            },
            text: "Moderator",
        },
        2: {
            style: {
                fontSize: 14,
                textAlign: "center",
                textAlignVertical: "center",
                padding: 5,
                borderColor: "gray",
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: "white",
                color: "gray",
            },
            text: "Kutilmoqda",
        },
        3: {
            style: {
                fontSize: 14,
                textAlign: "center",
                textAlignVertical: "center",
                padding: 5,
                borderColor: "#7B1FA2",
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: "#E1BEE7",
                color: "#7B1FA2",
            },
            text: "Biriktirilgan",
        },
        4: {
            style: {
                fontSize: 14,
                textAlign: "center",
                textAlignVertical: "center",
                padding: 5,
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: "#B0B2B2",
                color: "black",
            },
            text: "Haydovchida",
        },
        5: {
            style: {
                fontSize: 14,
                textAlign: "center",
                textAlignVertical: "center",
                padding: 5,
                borderColor: "#6A5E12",
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: "#F6E04C",
                color: "#6A5E12",
            },
            text: "Jarayonda",
        },
        6: {
            style: {
                fontSize: 14,
                textAlign: "center",
                textAlignVertical: "center",
                padding: 5,
                borderColor: "#4D9950",
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: "#C8E6C9",
                color: "#4D9950",
            },
            text: "Tayyor",
        },
        7: {
            style: {
                fontSize: 14,
                textAlign: "center",
                textAlignVertical: "center",
                padding: 5,
                borderColor: "#455A64",
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: "#CFD8DC",
                color: "#455A64",
            },
            text: "Yuklangan",
        },
        8: {
            style: {
                fontSize: 14,
                textAlign: "center",
                textAlignVertical: "center",
                padding: 5,
                borderColor: "#455A64",
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: "#CFD8DC",
                color: "#455A64",
            },
            text: "Yetkazib berishda",
        },
        9: {
            style: {
                fontSize: 14,
                textAlign: "center",
                textAlignVertical: "center",
                padding: 5,
                borderColor: "#244726",
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: "#388E3C",
                color: "white",
            },
            text: "Yetkazilgan",
        },
    };

    const tariffStyles = {
        true: {
            color: colors.red,
            fontWeight: "bold",
            fontSize: 14,
        },
        false: {
            color: colors.blue,
            fontWeight: "bold",
            fontSize: 14,
        },
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const value = await AsyncStorage.getItem("staff_token");
                let data = await fetch("https://pokiza.herokuapp.com/graphql", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        token: value,
                    },
                    body: JSON.stringify({
                        query: GET_ORDER_QUERY,
                        variables: {
                            orderId: orderId,
                        },
                    }),
                });

                let jsonData = await data.json();

                setFetchedData(jsonData.data.orders);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
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
                query: GET_ORDER_QUERY,
                variables: {
                    orderId: orderId,
                },
            }),
        });

        let jsonData = await data.json();

        setFetchedData(jsonData.data.orders);
        setRefreshing(false);
    }, []);

    return (
        <>
            {isLoading ? (
                <View>
                    <ActivityIndicator size="large" color={colors.blue} />
                </View>
            ) : (
                <View style={styles.containerAll}>
                    <View style={styles.sumLine}>
                        <Text style={styles.orderIdText}>
                            Buyurtma - #{orderId}
                        </Text>
                        <Feather
                            name="edit"
                            size={24}
                            color={colors.likeBlack}
                        />
                    </View>
                    <View style={[styles.sumLine, styles.orderBottom]}>
                        <Text style={styles.orderStatus}>Buyurtma holati</Text>
                        <Text style={statusStyles[order.orderStatus].style}>
                            {statusStyles[order.orderStatus].text}
                        </Text>
                    </View>
                    <View style={styles.sumLine}>
                        <Text style={styles.sumText}>
                            Umumiy{" "}
                            <Text style={styles.sumNum}>
                                {order.orderTotalPrice}
                            </Text>{" "}
                            so'm
                        </Text>
                        <Text style={styles.outOfTurn}>
                            Tariff:{" "}
                            <Text style={tariffStyles[order.orderSpecial]}>
                                {order.orderSpecial ? "Tezkor" : "Oddiy"}
                            </Text>
                        </Text>
                    </View>
                    {fetchedData ? (
                        <FlatList
                            data={
                                fetchedData ? fetchedData[0].orderProducts : []
                            }
                            renderItem={({ item }) => (
                                <CardOrderComponent item={item} />
                            )}
                            keyExtractor={(item) => item.productId}
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
                        <Ionicons
                            name="ios-arrow-back"
                            size={28}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
            )}
        </>
    );
};

export default OrderDetailScreen;
