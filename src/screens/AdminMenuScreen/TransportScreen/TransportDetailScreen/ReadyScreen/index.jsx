import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

const ReadyScreen = ({navigation}) => {
    return (
        <View style={{ height: "100%" }}>
            <View style={styles.dateAndTransport}>
                <Text>Date: {"10.08.2021"}</Text>
                <Text style={styles.transportName}>{"Damas"}</Text>
            </View>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentStyle}
            >
                <View style={styles.orderBox}>
                    <View style={styles.orderBoxContent}>
                        <View style={styles.orderNumber}>
                            <Text style={styles.orderNumberStyle}>
                                3 pcs.
                                <Text style={styles.productNameStyle}>
                                    {" "}
                                    carpet
                                </Text>
                            </Text>
                            <Text>
                                Size:
                                <Text style={styles.orderNumberStyle}>
                                    {" "}
                                    37 m.kv
                                </Text>
                            </Text>
                        </View>
                        <View style={styles.orderNumber}>
                            <Text style={styles.orderNumberStyle}>
                                Price: 185.000{" "}
                                <Text style={{ fontSize: 12 }}>sum</Text>
                            </Text>
                            <Text style={styles.finishedProduct}>
                                1<Text style={{ color: "black" }}>/3</Text>
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            width: "100%",
                            height: 4,
                            backgroundColor: "#F8F8F8",
                        }}
                    >
                        <View
                            style={{
                                height: "100%",
                                width: "100%",
                                backgroundColor: "#3DA700",
                            }}
                        ></View>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.navigate("TransportScreen")}
            >
                <Ionicons name="ios-arrow-back" size={28} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default ReadyScreen;
