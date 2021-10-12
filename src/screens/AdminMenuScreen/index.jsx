import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
    MaterialIcons,
    AntDesign,
    MaterialCommunityIcons,
    Ionicons,
    Feather
} from "@expo/vector-icons";

import { styles } from "./styles";

const AdminMenuScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.firstBox}>
                <TouchableOpacity style={styles.menuBox}>
                    <Text style={styles.menuText}>Contacts</Text>
                    <AntDesign name="contacts" size={28} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuBox}>
                    <Text style={styles.menuText}>Moderators</Text>
                    <MaterialIcons
                        name="person-outline"
                        size={28}
                        color="black"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuBox}>
                    <Text style={styles.menuText}>Orders</Text>
                    <AntDesign name="menuunfold" size={28} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuBox}>
                    <Text style={styles.menuText}>Transports</Text>
                    <Ionicons name="ios-car-outline" size={28} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.secondBox}>
                <TouchableOpacity style={styles.menuBox}>
                    <Text style={styles.menuText}>Finance</Text>
                    <Ionicons name="ios-car-outline" size={28} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuBox}>
                    <Text style={styles.menuText}>Statistics</Text>
                    <Feather name="trending-up" size={28} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.secondBox}>
                <TouchableOpacity style={styles.menuBox}>
                    <Text style={styles.menuText}>Staffs</Text>
                    <Feather name="users" size={28} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuBox}>
                    <Text style={styles.menuText}>History</Text>
                    <MaterialIcons name="history" size={28} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AdminMenuScreen;
