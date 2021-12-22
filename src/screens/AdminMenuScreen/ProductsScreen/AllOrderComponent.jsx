import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
    View,
    TouchableOpacity,
    Text,
    Dimensions,
    Alert,
    StyleSheet,
    Modal,
    Linking,
} from "react-native";
import { Entypo, MaterialIcons, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { colors } from "../../../constants/color";
import { styles } from "./styles";
import { request } from "../../../helpers/request";
import { showDate } from "../../../components/DateFormat";

const height = Dimensions.get("window").height;

const AllOrderCardComponent = ({ item, elements, setElements }) => {
    const navigation = useNavigation();

    const [userToken, setUserToken] = useState();
    const [selected, setSelected] = useState(false);
    const [locationModalVsible, setLocationModalVisible] = useState(false);
    const client = item;

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

    const own = StyleSheet.create({
        resultBox: {
            height: "100%",
            borderRadius: 15,
            marginBottom: 16,
            borderColor: "#EDEDED",
            borderWidth: 1,
            overflow: "hidden",
            borderTopColor: colors.red,
            borderTopWidth: 4,
        },
    });

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

    return (
        <>
            {item.productId ? (
                <TouchableOpacity
                    style={
                        selected
                            ? {
                                  height: height / 3.3,
                                  borderRadius: 15,
                                  marginHorizontal: 16,
                                  marginBottom: 16,
                                  borderColor: colors.blue,
                                  borderWidth: 1.5,
                                  overflow: "hidden",
                              }
                            : {
                                  height: height / 3.3,
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
                            item.order.orderSpecial
                                ? own.resultBox
                                : styles.resultBox
                        }
                    >
                        <View style={styles.resultLineBox}>
                            <View style={styles.resultId}>
                                <TouchableOpacity
                                    style={{ marginRight: 5 }}
                                    onPress={() => {
                                        setSelected(!selected);
                                        if (elements.includes(item.productId)) {
                                            elements = arrayRemove(
                                                elements,
                                                item.productId
                                            );
                                            setElements([...elements]);
                                            return;
                                        }
                                        elements.push(item.productId);
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
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate("ProductInfoScreen")
                                    }
                                    style={{ flexDirection: "row" }}
                                >
                                    <Text>Buyum: </Text>
                                    <Text style={styles.resultIdText}>
                                        #{`${item.productId}`}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.resultLineBox}>
                            <View style={styles.resultId}>
                                <Text>Buyurtma: </Text>
                                <Text style={styles.resultIdText}>
                                    #{`${item.order.orderId}`}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.resultLineBox}
                            onPress={async () => {
                                navigation.navigate("ClientFromModerators", {
                                    client: item.order.orderOwner,
                                    orderId: item.order.orderId,
                                });
                            }}
                        >
                            <Text style={styles.resultFullName}>
                                {item.order.orderOwner.clientInfo.firstName}{" "}
                                {item.order.orderOwner.clientInfo.lastName}{" "}
                            </Text>
                            <Text style={styles.resultFullName}>{`09:41`}</Text>
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
                                    style={
                                        statusStyles[item.productStatus].style
                                    }
                                >{`${
                                    statusStyles[item.productStatus].text
                                }`}</Text>
                            </View>
                        </View>
                        <View style={styles.resultLineBox}>
                            <TouchableOpacity
                                style={styles.deleteBox}
                                onPress={() => Linking.openURL(`tel:${1221}`)}
                            >
                                <MaterialIcons
                                    name="phone"
                                    size={22}
                                    color={colors.lighGreen}
                                    style={styles.cardIcon}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.acceptBox}
                                onPress={() => {
                                    setLocationModalVisible(true);
                                }}
                            >
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
            <Modal
                visible={locationModalVsible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setLocationModalVisible(false)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalWrapper}>
                        <View style={styles.modalFB}>
                            <Text style={styles.modalTxt}>
                                Olib ketgan haydovchi:
                            </Text>
                            <Text style={styles.modalTimeTxt}>{`2134`}</Text>
                            <Text
                                style={styles.modalTxt}
                            >{`${item.order.orderOwner.clientInfo.firstName} ${item.order.orderOwner.clientInfo.lastName}`}</Text>
                            <View style={styles.carMod}>
                                <Text style={styles.carModTxt}>FORD</Text>
                                <Text style={styles.carModTxt}>01 714 PA</Text>
                            </View>
                        </View>

                        <View style={styles.modalFB}>
                            <Text style={styles.modalTxt}>
                                Olib ketgan haydovchi:
                            </Text>
                            <Text style={styles.modalTimeTxt}>{`2134`}</Text>
                            <Text
                                style={styles.modalTxt}
                            >{`${item.order.orderOwner.clientInfo.firstName} ${item.order.orderOwner.clientInfo.lastName}`}</Text>
                            <View style={styles.carMod}>
                                <Text style={styles.carModTxt}>FORD</Text>
                                <Text style={styles.carModTxt}>01 714 PA</Text>
                            </View>
                        </View>

                        <TouchableOpacity
                            onPress={() => setLocationModalVisible(false)}
                            style={styles.modalSB}
                        >
                            <Text style={styles.modalSBTxt}>Orqaga</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
};

export default AllOrderCardComponent;
