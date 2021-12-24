import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
    AntDesign,
    MaterialCommunityIcons,
    Ionicons,
    Feather,
    Entypo,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "./styles";
import { showDate } from "../../components/DateFormat";

const AdminMenuScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.firstBox}>
                <TouchableOpacity
                    style={styles.menuBox}
                    onPress={() => navigation.navigate("ContactsScreen")}
                >
                    <Text style={styles.menuText}>Mijozlar</Text>
                    <AntDesign name="contacts" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuBox}
                    onPress={() => navigation.navigate("ModeratorsScreen")}
                >
                    <Text style={styles.menuText}>Moderator bo'limi</Text>
                    <Feather name="headphones" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuBox}
                    onPress={() => navigation.navigate("OrdersScreen")}
                >
                    <Text style={styles.menuText}>Buyurtmalar</Text>
                    <MaterialCommunityIcons
                        name="order-bool-descending-variant"
                        size={24}
                        color="black"
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuBox}
                    onPress={() => navigation.navigate("ProductsScreen")}
                >
                    <Text style={styles.menuText}>Buyumlar</Text>
                    <Entypo name="documents" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuBox}
                    onPress={() => navigation.navigate("TransportScreen")}
                >
                    <Text style={styles.menuText}>Transportlar</Text>
                    <Ionicons name="ios-car-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.secondBox}>
                <TouchableOpacity
                    style={styles.menuBox}
                    // onPress={() => navigation.navigate("CourierAddOrder")}
                >
                    <Text style={styles.menuText}>Moliya bo'limi</Text>
                    <Feather name="dollar-sign" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuBox}
                    // onPress={() => navigation.navigate("StatisticsScreen")}
                >
                    <Text style={styles.menuText}>Statistika bo'limi</Text>
                    <Feather name="trending-up" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.secondBox}>
                <TouchableOpacity
                    style={styles.menuBox}
                    // onPress={() => navigation.navigate("StaffsScreen")}
                >
                    <Text style={styles.menuText}>Jamoa</Text>
                    <Feather name="users" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuBox}
                    onPress={async() => {
                        // navigation.navigate("HistoryScreen");
                        await AsyncStorage.removeItem("staff_token")
                    }}
                >
                    <Text style={styles.menuText}>Monitoring</Text>
                    <Feather name="clock" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AdminMenuScreen;
