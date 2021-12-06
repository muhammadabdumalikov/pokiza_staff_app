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
                <TouchableOpacity
                    style={resultBox}
                    onLongPress={() => {
                        setResultBox({
                            height: height / 3.98,
                            backgroundColor: "gray",
                            borderRadius: 15,
                            marginHorizontal: 16,
                            marginBottom: 16,
                            borderColor: colors.blue,
                            borderWidth: 2,
                            overflow: "hidden",
                        });
                        setSelected(true);
                        elements.push(item.clientInfo.userId);
                        console.log(elements);
                    }}
                >
                    <View style={styles.resultLineBox}>
                        <View style={styles.resultId}>
                            {selected ? (
                                <Ionicons
                                    name="checkbox-outline"
                                    size={24}
                                    color={colors.blue}
                                />
                            ) : (
                                <Ionicons
                                    name="heart"
                                    size={24}
                                    color={colors.red}
                                />
                            )}
                            <TouchableOpacity>
                                <Text style={styles.resultIdText}>
                                    {"001523"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.locationStyle}>
                            <Entypo
                                name="location-pin"
                                size={24}
                                color="black"
                            />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            ...styles.resultLineBox,
                            borderBottomWidth: 0,
                        }}
                    >
                        <TouchableOpacity>
                            <Text style={styles.resultFullName}>
                                {`${item.clientInfo.firstName} ${item.clientInfo.lastName}`}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.resultLineBox}>
                        <Text style={styles.resultPhoneNumbers}>
                            {item.clientInfo.mainContact}
                        </Text>
                        <Text style={styles.resultPhoneNumbers}>
                            {item.clientInfo.secondContact}
                        </Text>
                    </View>
                    <View
                        style={{
                            ...styles.resultLineBox,
                            borderBottomWidth: 0,
                        }}
                    >
                        <Text style={styles.resultPhoneNumbers}>
                            Yoshi: {item.clientInfo.age}
                        </Text>
                        <Text style={styles.resultPhoneNumbers}>
                            Jinsi:{" "}
                            {item.clientInfo.gender == 1 ? "Erkak" : "Ayol"}
                        </Text>
                    </View>
                </TouchableOpacity>
            ) : null}
        </>
    );
};

export default CardComponent;
