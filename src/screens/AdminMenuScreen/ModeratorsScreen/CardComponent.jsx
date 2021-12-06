import React, { useState } from "react";
import { View, TouchableOpacity, Text, Dimensions, Alert } from "react-native";
import { Entypo, Feather, AntDesign } from "@expo/vector-icons";

import { colors } from "../../../constants/color";
import { styles } from "./styles";

const height = Dimensions.get("window").height;

const CardComponent = ({ item }) => {
    const addressAlert = (id) => {
        Alert.alert(`${id}`, "", [
            {
                text: "Qaytish",
                onPress: () => null,
                style: "cancel",
            },
        ]);
    }
    return (
        <>
            {item.orderId ? (
                <View style={styles.resultBox}>
                    <View style={styles.resultLineBox}>
                        <View style={styles.resultId}>
                            <Text
                                style={styles.resultIdText}
                            >{`${item.orderId}`}</Text>
                        </View>
                        <TouchableOpacity onPress={()=> addressAlert(item.orderAddress.addressId)} style={styles.locationStyle}>
                            <Entypo
                                name="location-pin"
                                size={24}
                                color="black"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.resultLineBox}>
                        <Text style={styles.resultFullName}>
                            {item.orderOwner.clientInfo.firstName}{" "}
                            {item.orderOwner.clientInfo.lastName}
                        </Text>
                    </View>
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
                        <TouchableOpacity style={styles.acceptBox}>
                            <Feather name="check" size={24} color="#4BCE00" />
                            <Text style={styles.acceptText}>Qabul qilish</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.deleteBox}>
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
