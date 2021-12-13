import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Text, Dimensions, Alert } from "react-native";
import { Entypo, Feather, AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { colors } from "../../../constants/color";
import { styles } from "./styles";
import { request } from "../../../helpers/request";

const height = Dimensions.get("window").height;

const CardComponent = ({ item }) => {
    const navigation = useNavigation();

    const [userToken, setUserToken] = useState();

    const CHANGE_ORDER_STATUS = `mutation($orderId: ID!, $orderStatus: Int){
        changeOrder(orderId: $orderId, orderStatus: $orderStatus){
          status
          message
          data
        }
      }`;

    const DELETE_ORDER = `mutation($item: itemTypes!, $itemId: ID!){
        disable(item: $item, itemId: $itemId){
          status
          message
          data
        }
      }`;

    useEffect(() => {
        async function fetchData() {
            try {
                const value = await AsyncStorage.getItem("staff_token");
                setUserToken(value);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const addressAlert = (id) => {
        Alert.alert(`${id}`, "", [
            {
                text: "Qaytish",
                onPress: () => null,
                style: "cancel",
            },
        ]);
    };

    const confirmDeleteOrder = () => {
        Alert.alert(`Buyurtmani o'chirishni xohlaysizmi?`, "", [
            {
                text: "Qaytish",
                onPress: () => null,
                style: "cancel",
            },
            {
                text: "O'chirish",
                onPress: async () => {
                    const result = await request(
                        DELETE_ORDER,
                        {
                            item: "order",
                            itemId: item.orderId,
                        },
                        userToken
                    );
                },
            },
        ]);
    };

    const confirmGetOrder = () => {
        Alert.alert(`Buyurtma qabul qilindi!`, "", [
            {
                text: "Qaytish",
                onPress: () => null,
                style: "cancel",
            },
        ]);
    };
    return (
        <>
            {item.orderId ? (
                <View style={styles.resultBox}>
                    <View style={styles.resultLineBox}>
                        <View style={styles.resultId}>
                            <Text style={styles.resultIdText}>
                                Buyurtma ID: #{`${item.orderId}`}
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={() =>
                                addressAlert(item.orderAddress.addressId)
                            }
                            style={styles.locationStyle}
                        >
                            <Entypo
                                name="location-pin"
                                size={24}
                                color="black"
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={async () => {
                            // await AsyncStorage.setItem("clientId", item.orderOwner.clientInfo.clientId)
                            navigation.navigate("ClientFromModerators", {
                                screen: "ClientInfo",
                                params: {
                                    client: item.orderOwner,
                                    clientId: item.clientId,
                                },
                            });
                        }}
                        style={styles.resultLineBox}
                    >
                        <Text style={styles.resultFullName}>
                            {item.orderOwner.clientInfo.firstName}{" "}
                            {item.orderOwner.clientInfo.lastName}
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.resultLineBox}>
                        <Text style={styles.resultPhoneNumbers}>
                            {item.orderOwner.clientInfo.mainContact}
                        </Text>
                        <Text style={styles.resultPhoneNumbers}>
                            {item.orderOwner.clientInfo.secondContact}
                        </Text>
                    </View>
                    <View style={styles.resultLineBox}>
                        <Text style={styles.tariffText}>
                            Tarif:{"   "}
                            <Text
                                style={
                                    item.orderSpecial
                                        ? {
                                              ...styles.tariffDynamicText,
                                              color: colors.red,
                                          }
                                        : {
                                              ...styles.tariffDynamicText,
                                              color: colors.blue,
                                          }
                                }
                            >
                                {item.orderSpecial
                                    ? "Navbatsiz".toUpperCase()
                                    : "Oddiy".toUpperCase()}
                            </Text>
                        </Text>
                        <Text style={styles.resultPhoneNumbers}></Text>
                    </View>
                    <View style={styles.resultLineBox}>
                        <TouchableOpacity
                            style={styles.acceptBox}
                            onPress={async () => {
                                const { changeOrder } = await request(
                                    CHANGE_ORDER_STATUS,
                                    { orderId: item.orderId, orderStatus: 2 },
                                    userToken
                                );
                                if (changeOrder.status) confirmGetOrder();
                            }}
                        >
                            <Feather name="check" size={24} color="#4BCE00" />
                            <Text style={styles.acceptText}>Qabul qilish</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.deleteBox}
                            onPress={confirmDeleteOrder}
                        >
                            <AntDesign name="delete" size={24} color="black" />
                            <Text style={styles.deleteText}>O'chirish</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : null}
        </>
    );
};

export default CardComponent;
