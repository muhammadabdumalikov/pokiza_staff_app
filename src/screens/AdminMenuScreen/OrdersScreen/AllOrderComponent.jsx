import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
    View,
    TouchableOpacity,
    Text,
    Dimensions,
    Alert,
    StyleSheet,
} from "react-native";
import {
    Entypo,
    MaterialIcons,
    Ionicons,
    Feather,
    AntDesign,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { colors } from "../../../constants/color";
import { styles } from "./styles";
import { request } from "../../../helpers/request";

const height = Dimensions.get("window").height;

const AllOrderCardComponent = ({ item, elements, setElements }) => {
    const navigation = useNavigation();

    const [userToken, setUserToken] = useState();
    const [selected, setSelected] = useState(false);
    const [locationModalVsible, setLocationModalVisible] = useState(false);
    const client = item;

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

    function arrayRemove(arr, value) {
        return arr.filter(function (ele) {
            return ele != value;
        });
    }

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

    const own = StyleSheet.create({
        resultBox: {
            height: height / 3.98,
            backgroundColor: "gray",
            borderRadius: 15,
            marginBottom: 16,
            borderColor: "#EDEDED",
            borderWidth: 1,
            overflow: "hidden",
            borderTopColor: colors.red,
            borderTopWidth: 4,
        },
    });

    return (
        <>
            {item.orderId ? (
                <TouchableOpacity
                    style={
                        selected
                            ? {
                                  height: height / 3.98,
                                  backgroundColor: "gray",
                                  borderRadius: 15,
                                  marginHorizontal: 16,
                                  marginBottom: 16,
                                  borderColor: colors.blue,
                                  borderWidth: 1.5,
                                  overflow: "hidden",
                              }
                            : {
                                  height: height / 3.98,
                                  backgroundColor: "gray",
                                  borderRadius: 15,
                                  marginHorizontal: 16,
                                  marginBottom: 16,
                                  borderColor: colors.gray,
                                  borderWidth: 0.5,
                                  overflow: "hidden",
                              }
                    }
                >
                    <View
                        style={
                            item.orderSpecial ? own.resultBox : styles.resultBox
                        }
                    >
                        <View style={styles.resultLineBox}>
                            <View style={styles.resultId}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setSelected(!selected);
                                        if (elements.includes(item.orderId)) {
                                            elements = arrayRemove(
                                                elements,
                                                item.orderId
                                            );
                                            setElements([...elements]);
                                            return;
                                        }
                                        elements.push(item.orderId);
                                        setElements([...elements]);
                                    }}
                                >
                                    {selected ? (
                                        <Ionicons
                                            name="checkbox-outline"
                                            size={26}
                                            color={colors.blue}
                                        />
                                    ) : (
                                        <Ionicons
                                            name="checkbox-outline"
                                            size={26}
                                            color={colors.gray}
                                        />
                                    )}
                                </TouchableOpacity>
                                <Text>Buyurtma: </Text>
                                <Text style={styles.resultIdText}>
                                    #{`${item.orderId}`}
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.resultLineBox}
                            onPress={async () => {
                                navigation.navigate("ClientFromModerators", {
                                    client: item.orderOwner,
                                    orderId: item.orderId,
                                });
                            }}
                        >
                            <Text style={styles.resultFullName}>
                                {item.orderOwner.clientInfo.firstName}{" "}
                                {item.orderOwner.clientInfo.lastName}{" "}
                            </Text>
                            <Text>{`09:41`}</Text>
                        </TouchableOpacity>
                        <View style={styles.resultLineBox}>
                            <Text style={styles.timeText}>
                                Vaqt:{" "}
                                <Text style={styles.timeDynamicText}>
                                    1d 23h 51m
                                </Text>
                            </Text>
                            <View style={styles.timeText}>
                                <Text
                                    style={styles.timeStatus}
                                >{`Omborda`}</Text>
                            </View>
                        </View>
                        <View style={styles.resultLineBox}>
                            <TouchableOpacity style={styles.deleteBox}>
                                <MaterialIcons
                                    name="phone"
                                    size={22}
                                    color={colors.lighGreen}
                                    style={styles.cardIcon}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.acceptBox}>
                                <Entypo
                                    name="location-pin"
                                    size={22}
                                    color="black"
                                    style={styles.cardIcon}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.acceptBox}>
                                <MaterialIcons
                                    name="comment"
                                    size={22}
                                    color={colors.blue}
                                    style={styles.cardIcon}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.acceptBox}>
                                <Ionicons
                                    name="car-outline"
                                    size={22}
                                    color="black"
                                    style={styles.cardIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            ) : null}
        </>
    );
};

export default AllOrderCardComponent;
