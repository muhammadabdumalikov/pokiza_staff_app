import React, { useState } from "react";
import {
    ScrollView,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Dimensions,
    Platform,
} from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

const height = Dimensions.get("window").height;

const Transport1 = ({ navigation, route }) => {
    return (
        <View style={{ height: "100%" }}>
            <View style={styles.dateAndTransport}>
                <Text>Date: {"10.08.2021"}</Text>
                <Text style={styles.transportName}>{"Damas"}</Text>
            </View>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentStyle}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.resultBox}>
                    <View style={styles.topBox}>
                        <View style={styles.resultName}>
                            <Text style={styles.resultNameText}>
                                {"Abdujalilov Abdulaziz"}
                            </Text>
                        </View>
                        <View style={styles.resultOrderId}>
                            <Text style={styles.resultOrderIdText}>
                                Order ID:{" "}
                                <Text style={styles.resultOrderIdDynamicText}>
                                    #{"100174"}
                                </Text>
                            </Text>
                        </View>
                        <View style={styles.resultAddress}>
                            <Text style={styles.resultAddressText}>
                                Address:{" "}
                            </Text>
                            <Text style={styles.resultAddressDynamicText}>
                                {
                                    "Mirobod tumani, Rakat mahalla, Xosilot ko'chasi, 76-uy, 42-xonadon"
                                }
                            </Text>
                        </View>
                        <View style={styles.resultAddressLocation}>
                            <Entypo
                                name="location-pin"
                                size={24}
                                color="#007AFF"
                            />
                            <Text
                                style={styles.resultAddressLocationDynamicText}
                            >
                                {"Mirobod masjidi"}
                            </Text>
                        </View>
                        <View style={styles.resultPhoneNumbers}>
                            <Text style={styles.resultAddressText}>
                                Phone Numbers:
                            </Text>
                            <View>
                                <Text>{"+998911234567"}</Text>
                                <Text>{"+998911234567"}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottomBox}>
                        <View style={styles.totalSumTextWrapper}>
                            <Text style={styles.totalSumText}>Total: <Text style={styles.totalSumDynamicText}>{"269.00"}</Text> sum</Text>
                        </View>
                        <View style={styles.productDetailsWrapper}>
                            <Text style={styles.productText}>{"3"} pcs. <Text style={styles.productDynamicText}>{"carpet"}</Text></Text>
                            <Text style={styles.productText}>{"1"} pcs. <Text style={styles.productDynamicText}>{"veil"}</Text></Text>
                            <Text style={styles.productText}>{"3"} pcs. <Text style={styles.productDynamicText}>{"carpet"}</Text></Text>
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

export default Transport1;
