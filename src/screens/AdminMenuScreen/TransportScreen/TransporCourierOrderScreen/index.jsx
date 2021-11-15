import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "./styles";
import { TextInput } from "react-native-gesture-handler";
import { colors } from "../../../../constants/color";

const TransportCourierOrderScreen = ({ navigation }) => {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentStyle}
            showsVerticalScrollIndicator={false}
        >
            <View style={[styles.inputContainer, styles.name]}>
                <Text style={styles.fontSize}>Ism</Text>
                <Text style={styles.fontSize}>Abdujalilov Abdulaziz</Text>
            </View>
            <View style={[styles.inputContainer, styles.phones]}>
                <Text style={styles.fontSize}>Telefon</Text>
                <Text style={styles.fontSize}>Abdujalilov Abdulaziz</Text>
                <FontAwesome5
                    name="phone-square-alt"
                    size={24}
                    color={colors.lighGreen}
                />
            </View>
            <View style={[styles.inputContainer, styles.phones]}>
                <Text style={styles.fontSize}>Telefon 2</Text>
                <Text style={styles.fontSize}>Abdujalilov Abdulaziz</Text>
                <FontAwesome5
                    name="phone-square-alt"
                    size={24}
                    color={colors.lighGreen}
                />
            </View>
            <View style={[styles.inputContainer, styles.address]}>
                <View>
                    <Text style={styles.fontSize}>Adress</Text>
                    <Text>State, Region</Text>
                </View>
                <Text style={styles.fontSize}>Detail</Text>
            </View>
            <View style={styles.comment}>
                <Text style={styles.fontSize}>Izoh</Text>
                <TextInput
                    placeholder="Izoh yozish uchun joy"
                    multiline={true}
                />
            </View>
            <TouchableOpacity style={styles.call}>
                <Text style={styles.fontSize}>Called</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.add}>
                <Text style={styles.fontSize}>Buyurtmani qabul qilish</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default TransportCourierOrderScreen;
