import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
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
                       
                    </View>
                    <View style={styles.resultDetailBox}>
                    <View>
                            <Text></Text>
                            <Text></Text>
                        </View>
                        <View>
                            <Text></Text>
                            <Text></Text>
                        </View>
                        <View>
                            <Text></Text>
                            <Text></Text>
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
