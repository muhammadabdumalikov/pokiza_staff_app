import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

const TransportScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.dateWrapper}>
                <Text style={styles.dateText}>Date: </Text>
                <Text style={styles.dateDynamicText}>{"10.08.2021"}</Text>
            </View>
            <ScrollView
                style={styles.scrollBox}
                contentContainerStyle={styles.scrollContentContainer}
            >
                <View style={styles.resultBox}>
                    <View style={styles.resultImageBox}>
                        <Image style={styles.image} source={require('../../../../assets/damas.png')} />
                    </View>
                    <View style={styles.resultDetailBox}>
                        <View style={styles.resultDetailLine}>
                            <Text style={styles.carModelText}>{"Damas"}</Text>
                            <Text style={styles.carNumberText}>{"01 A 714 PA"}</Text>
                        </View>
                        <View style={styles.resultDetailLine}>
                            <Text style={styles.waitingText}>Waiting: </Text>
                            <Text>{"10"} orders</Text>
                        </View>
                        <View style={styles.resultDetailLine}>
                            <Text style={styles.readyText}>Ready: </Text>
                            <Text>{"5"} orders</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="ios-arrow-back" size={28} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default TransportScreen;
