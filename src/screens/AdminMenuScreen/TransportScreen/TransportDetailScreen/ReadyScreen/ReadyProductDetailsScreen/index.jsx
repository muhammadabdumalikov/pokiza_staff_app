import React from "react";
import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

const ReadyScreen = ({ navigation }) => {
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
                <TouchableOpacity style={styles.orderDetailBox} onPress={() => navigation.navigate("Transport1")}>
                    <View style={styles.orderDetailTextContent}>
                        <View style={styles.orderDetailStatusContent}>
                            <Text style={styles.statusText}>Status:</Text>
                            <Text style={styles.status}>In Washing</Text>
                        </View>
                        <View style={styles.orderDetailSizeContent}>
                            <Text style={styles.sizeText}>Size:</Text>
                            <Text style={styles.size}>12 m.kv</Text>
                        </View>
                    </View>
                    <Image style={styles.orderImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.orderDetailBox} onPress={() => navigation.navigate("Transport2")}>
                    <View style={styles.orderDetailTextContent}>
                        <View style={styles.orderDetailStatusContent}>
                            <Text style={styles.statusText}>Status:</Text>
                            <Text style={styles.status}>In Washing</Text>
                        </View>
                        <View style={styles.orderDetailSizeContent}>
                            <Text style={styles.sizeText}>Size:</Text>
                            <Text style={styles.size}>12 m.kv</Text>
                        </View>
                    </View>
                    <Image style={styles.orderImage} />
                </TouchableOpacity>
                <View
                    style={styles.orderDetailBox}
                >
                    <View style={styles.orderDetailTextContent}>
                        <View style={styles.orderDetailStatusContent}>
                            <Text style={styles.statusText}>Status:</Text>
                            <Text style={styles.status}>Done</Text>
                        </View>
                        <View style={styles.orderDetailSizeContent}>
                            <Text style={styles.sizeText}>Size:</Text>
                            <Text style={styles.size}>12 m.kv</Text>
                        </View>
                    </View>
                    <Image style={styles.orderImage} />
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.navigate("TransportDetailScreen")}
            >
                <Ionicons name="ios-arrow-back" size={28} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default ReadyScreen;
