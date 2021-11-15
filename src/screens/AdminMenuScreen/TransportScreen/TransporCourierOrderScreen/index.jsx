import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { styles } from "./styles";
import { TextInput } from "react-native-gesture-handler";
import { colors } from "../../../../constants/color";

const TransportCourierOrderScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={[styles.inputContainer], styles.name}>
                <Text>Ism</Text>
                <Text>Abdujalilov Abdulaziz</Text>
            </View>
            <View style={[styles.inputContainer, styles.phones]}>
                <Text>Telefon</Text>
                <Text>Abdujalilov Abdulaziz</Text>
                <FontAwesome5 name="phone-square-alt" size={24} color={colors.lighGreen} />
            </View>
            <View style={[styles.inputContainer, styles.phones]}>
                <Text>Telefon 2</Text>
                <Text>Abdujalilov Abdulaziz</Text>
                <FontAwesome5 name="phone-square-alt" size={24} color={colors.lighGreen} />
            </View>
            <View style={styles.address}>
                <View>
                    <Text>Adress</Text>
                    <Text>State, Region</Text>
                </View>
                <Text>Detail</Text>
            </View>
            <View style={styles.comment}>
                <Text>Izoh</Text>
                <TextInput placeholder="Izoh yozish uchun joy" multiline={true}/>
            </View>
            <TouchableOpacity style={styles.call}>
                <Text>Called</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.add}>
                <Text>Buyurtmani qabul qilish</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TransportCourierOrderScreen;