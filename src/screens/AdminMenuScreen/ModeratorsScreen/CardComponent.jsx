import React, { useState } from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";

import { colors } from "../../../constants/color";
import { styles } from "./styles";

const height = Dimensions.get("window").height;
const elements = [];

const CardComponent = ({ item }) => {
    const [resultBox, setResultBox] = useState({
        height: height / 3.98,
        backgroundColor: "gray",
        borderRadius: 15,
        marginHorizontal: 16,
        marginBottom: 16,
        borderColor: "#EDEDED",
        borderWidth: 1,
        overflow: "hidden",
    });

    const [selected, setSelected] = useState(false);

    return (
        <>
            {item.clientInfo ? (
                <View style={styles.resultBox}>
                    <View style={styles.resultLineBox}>
                        <View style={styles.resultId}>
                            <Text style={styles.resultIdText}>{"001523"}</Text>
                        </View>
                        <TouchableOpacity style={styles.locationStyle}>
                            <Entypo
                                name="location-pin"
                                size={24}
                                color="black"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.resultLineBox}>
                        <Text style={styles.resultFullName}>
                            Hamdamboyev Hudoyberdi
                        </Text>
                    </View>
                    <View style={styles.resultLineBox}>
                        <Text style={styles.resultPhoneNumbers}>
                            +998911000000
                        </Text>
                        <Text style={styles.resultPhoneNumbers}>
                            +998901111111
                        </Text>
                    </View>
                    <View style={styles.resultLineBox}>
                        <Text style={styles.tariffText}>
                            Tarif:{"    "}
                            <Text
                                style={{
                                    ...styles.tariffDynamicText,
                                    color: "#E50000",
                                }}
                            >
                                {"Navbatsiz".toUpperCase()}
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
