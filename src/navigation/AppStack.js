import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    Ionicons,
    MaterialIcons,
    MaterialCommunityIcons,
    FontAwesome,
    Feather,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Dimensions } from "react-native";
import AdminMenuScreen from "../screens/AdminMenuScreen";

const StaffTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MenuStack = ({ navigation, route }) => {
    return (
        <Stack.Navigator screenOptions={{}}>
            <Stack.Screen
                name="AdminMenuScreen"
                component={AdminMenuScreen}
                options={({ route }) => ({
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 18,
                        top: 25,
                        textAlign: "center",
                    },
                    headerStyle: {
                        shadowColor: "#fff",
                        elevation: 0,
                        height: Dimensions.get("window").height / 5.8,
                    },
                    headerRight: () => (
                        <TouchableOpacity style={{ marginRight: 20 }}>
                            <Feather name="phone" size={24} color="#007AFF" />
                        </TouchableOpacity>
                    ),
                    headerLeft: () => null,
                })}
            />
        </Stack.Navigator>
    );
};

const NoticesStack = ({ navigation, route }) => {
    return (
        <Stack.Navigator screenOptions={{}}>
            <Stack.Screen
                name="NoticesScreen"
                component={NoticesScreen}
                options={({ route }) => ({
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 18,
                        top: 25,
                        textAlign: "center",
                    },
                    headerStyle: {
                        shadowColor: "#fff",
                        elevation: 0,
                        height: Dimensions.get("window").height / 5.8,
                    },
                    // title: route.params.id,
                    headerRight: () => (
                        <TouchableOpacity style={{ marginRight: 20 }}>
                            <Feather name="phone" size={24} color="#007AFF" />
                        </TouchableOpacity>
                    ),
                    headerLeft: () => null,
                })}
            />
        </Stack.Navigator>
    );
};

const SearchStack = ({ navigation, route }) => {
    return (
        <Stack.Navigator screenOptions={{}}>
            <Stack.Screen
                name="LocationScreen"
                component={LocationScreen}
                options={({ route }) => ({
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 18,
                        top: 25,
                        textAlign: "center",
                    },
                    headerStyle: {
                        shadowColor: "#fff",
                        elevation: 0,
                        height: Dimensions.get("window").height / 5.8,
                    },
                    // title: route.params.id,
                    headerRight: () => (
                        <TouchableOpacity style={{ marginRight: 20 }}>
                            <Feather name="phone" size={24} color="#007AFF" />
                        </TouchableOpacity>
                    ),
                    headerLeft: () => null,
                })}
            />
        </Stack.Navigator>
    );
};

const QRCodeStack = ({ navigation, route }) => {
    return (
        <Stack.Navigator screenOptions={{}}>
            <Stack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={({ route }) => ({
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 18,
                        top: 25,
                        textAlign: "center",
                    },
                    headerStyle: {
                        shadowColor: "#fff",
                        elevation: 0,
                        height: Dimensions.get("window").height / 5.8,
                    },
                    // title: route.params.id,
                    headerRight: () => (
                        <TouchableOpacity style={{ marginRight: 20 }}>
                            <Feather name="phone" size={24} color="#007AFF" />
                        </TouchableOpacity>
                    ),
                    headerLeft: () => null,
                })}
            />
        </Stack.Navigator>
    );
};

const SettingsStack = ({ navigation, route }) => {
    return (
        <Stack.Navigator screenOptions={{}}>
            <Stack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={({ route }) => ({
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 18,
                        top: 25,
                        textAlign: "center",
                    },
                    headerStyle: {
                        shadowColor: "#fff",
                        elevation: 0,
                        height: Dimensions.get("window").height / 5.8,
                    },
                    // title: route.params.id,
                    headerRight: () => (
                        <TouchableOpacity style={{ marginRight: 20 }}>
                            <Feather name="phone" size={24} color="#007AFF" />
                        </TouchableOpacity>
                    ),
                    headerLeft: () => null,
                })}
            />
        </Stack.Navigator>
    );
};

// const MessageStack = ({ navigation }) => (
//     <Stack.Navigator>
//         <Stack.Screen name="Messages" component={MessagesScreen} />
//         <Stack.Screen
//             name="Chat"
//             component={ChatScreen}
//             options={({ route }) => ({
//                 title: route.params.userName,
//                 headerBackTitleVisible: false,
//             })}
//         />
//     </Stack.Navigator>
// );

// const ProfileStack = ({ navigation }) => (
//     <Stack.Navigator>
//         <Stack.Screen
//             name="Profile"
//             component={ProfileScreen}
//             options={{
//                 headerShown: false,
//             }}
//         />
//         <Stack.Screen
//             name="EditProfile"
//             component={EditProfileScreen}
//             options={{
//                 headerTitle: "Edit Profile",
//                 headerBackTitleVisible: false,
//                 headerTitleAlign: "center",
//                 headerStyle: {
//                     backgroundColor: "#fff",
//                     shadowColor: "#fff",
//                     elevation: 0,
//                 },
//             }}
//         />
//     </Stack.Navigator>
// );

const AppStack = () => {
    return (
        <StaffTab.Navigator
            initialRouteName="Menu"
            screenOptions={{
                tabBarShowLabel: true,
                tabBarActiveTintColor: "#007AFF",
                headerShown: false,
                tabBarStyle: {
                    height: Dimensions.get("window").height / 9.78,
                    paddingBottom: 20,
                },
            }}
        >
            <StaffTab.Screen
                name="Notice"
                component={NoticesStack}
                options={({ route }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="menu" size={24} color={color} />
                    ),
                })}
            />
            <StaffTab.Screen
                name="Search"
                component={SearchStack}
                options={({ route }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="bell" size={24} color={color} />
                    ),
                })}
            />
            <StaffTab.Screen
                name="Menu"
                component={MenuStack}
                options={({ route }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="map" size={24} color={color} />
                    ),
                })}
            />
            <StaffTab.Screen
                name="QRCode"
                component={QRCodeStack}
                options={{
                    // tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" size={24} color={color} />
                    ),
                }}
            />
             <StaffTab.Screen
                name="Settings"
                component={SettingsStack}
                options={{
                    // tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" size={24} color={color} />
                    ),
                }}
            />
        </StaffTab.Navigator>
    );
};

export default AppStack;
