import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

const TransportScreen = () => {
    return(
       <View style={styles.container}>
           <View>
               <Text>Date</Text>
               <Text>{"10.08.2021"}</Text>
           </View>
           <ScrollView>
            
            </ScrollView>
            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="ios-arrow-back" size={28} color="white" />
            </TouchableOpacity>
       </View>
    )
}

export default TransportScreen;