import React, { useState } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StyleSheet,
    Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../../constants/color";


// import { styles } from "./styles";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CardComponentOrders = ({ item, navigation }) => {
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
        <TouchableOpacity
            style={styles.orderBox}
            onPress={() =>
                navigation.navigate("OrderDetailScreen", {
                    id: "ID: #329304",
                })
            }
        >
            <View style={styles.first}>
                <View style={styles.orderNumber}>
                    <Text style={styles.orderNumberStyle}>Buyurtma</Text>
                    <Text style={styles.orderNumberStyle}>#{item.orderId}</Text>
                </View>
                <View style={styles.orderStatusWrapper}>
                    <Text style={styles.orderStatusText}>Buyurma holati</Text>
                    <Text style={statusStyles[item.orderStatus].style}>
                        {statusStyles[item.orderStatus].text}
                    </Text>
                </View>
            </View>

            <View style={styles.second}>
                <View style={styles.orderRegisterBox}>
                    <View style={styles.orderRegisterTextWrapper}>
                        <Feather name="calendar" size={18} color="black" />
                        <Text style={styles.orderRegisterText}>
                            Ro'yxatdan o'tgan sana
                        </Text>
                    </View>
                    <Text style={styles.orderRegisterDate}>18.11.2020</Text>
                </View>
                <View style={styles.orderRegisterBox}>
                    <View style={styles.orderRegisterTextWrapper}>
                        <Feather name="calendar" size={18} color="black" />
                        <Text style={styles.orderRegisterText}>
                            Olib ketilgan sana
                        </Text>
                    </View>
                    <Text style={styles.orderRegisterDate}>--.--.----</Text>
                </View>
                <View style={styles.orderRegisterBox}>
                    <View style={styles.orderRegisterTextWrapper}>
                        <Feather name="calendar" size={18} color="black" />
                        <Text style={styles.orderRegisterText}>
                            Qabul qilingan sana
                        </Text>
                    </View>
                    <Text style={styles.orderRegisterDate}>--.--.----</Text>
                </View>
            </View>

            <View style={styles.third}>
                <View style={styles.orderNumber}>
                    <Text style={styles.summText}>Umumiy summa:</Text>
                    <Text style={styles.orderSumm}>
                        {item.orderTotalPrice.toString()} so'm
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default CardComponentOrders;

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
