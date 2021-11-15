import React from "react";
import { View, Text, ScrollView } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { styles } from "./styles";

const TransportCourierOrderScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View>
                <Text>Ism</Text>
                <Text>Abdujalilov Abdulaziz</Text>
            </View>
            <View>
                <Text>Ism</Text>
                <Text>Abdujalilov Abdulaziz</Text>
                <FontAwesome5 name="phone-square-alt" size={24} color="black" />
            </View>
            <View>
                <Text>Ism</Text>
                <Text>Abdujalilov Abdulaziz</Text>
                <FontAwesome5 name="phone-square-alt" size={24} color="black" />
            </View>
        </View>
    )
}

export default TransportCourierOrderScreen;