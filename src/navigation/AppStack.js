import React, { useContext, useEffect, useState } from "react";
import { Text, TouchableOpacity, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    Ionicons,
    MaterialIcons,
    MaterialCommunityIcons,
    FontAwesome,
    Feather,
    AntDesign,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AdminMenuScreen from "../screens/AdminMenuScreen";
import ContactsScreen from "../screens/AdminMenuScreen/ContactsScreen";
import { AuthContext } from "./AuthProvider";
import ModeratorsScreen from "../screens/AdminMenuScreen/ModeratorsScreen";
import OrdersScreen from "../screens/AdminMenuScreen/OrdersScreen";
import TransportScreen from "../screens/AdminMenuScreen/TransportScreen";
import TransportDetailScreen from "../screens/AdminMenuScreen/TransportScreen/TransportDetailScreen";
import ReadyProductDetailScreen from "../screens/AdminMenuScreen/TransportScreen/TransportDetailScreen/ReadyScreen/ReadyProductDetailsScreen";
import Transport1 from "../screens/AdminMenuScreen/TransportScreen/TransportDetailScreen/ReadyScreen/ReadyProductDetailsScreen/Transport1";
import Transport2 from "../screens/AdminMenuScreen/TransportScreen/TransportDetailScreen/ReadyScreen/ReadyProductDetailsScreen/Transport2";
import QRCodeScreen from "../screens/QRCodeScreen";
import StaffsScreen from "../screens/AdminMenuScreen/StaffsScreen";
import HistoryScreen from "../screens/AdminMenuScreen/HistoryScreen";
import StatisticsScreen from "../screens/AdminMenuScreen/StatisticsScreen";
import SearchScreen from "../screens/SearchScreen";
import NoticesScreen from "../screens/NotificationScreen";
import TransportCourierOrderScreen from "../screens/AdminMenuScreen/TransportScreen/TransporCourierOrderScreen";
import CourierAddOrderInfoScreen from "../screens/AdminMenuScreen/TransportScreen/CourierOrderInfoScreen";
import CallButton from "../components/callButton";
import LogoImage from "../components/LogoImage";
import AddClientScreen from "../screens/AdminMenuScreen/ContactsScreen/AddClientScreen";
import ClientFromModerators from "../screens/AdminMenuScreen/ModeratorsScreen/ClientIndex";
import SignInScreen from "../screens/SignInScreen";

const StaffTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const MenuStack = ({ navigation, route }) => {
    const [token, setToken] = useState();

    useEffect(() => {
        async function fetchData() {
            let value = await AsyncStorage.getItem("staff_token");
            setToken(value);
        }
        fetchData();
    });
    return (
        <Stack.Navigator
        >
            <Stack.Screen
                name="AdminMenuScreen"
                component={AdminMenuScreen}
                
                options={({ route }) => ({
                    headerTitle: "Asosiy sahifa",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 24,
                        textAlign: "center",
                    },
                    gestureEnabled: false,
                    headerStyle: {
                        elevation: 0,
                        height: Dimensions.get("window").height / 5.17,
                    },
                    title: "Super Admin's Menu",
                    headerLeft: () => null,
                })}
            />
            <Stack.Screen
                name="ContactsScreen"
                component={ContactsScreen}
                options={({ route }) => ({
                    headerTitle: "Mijozlar bo'limi",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 18,
                        top: 35,
                        textAlign: "center",
                    },
                    headerStyle: {
                        backgroundColor: "#F4F4F5",
                        shadowColor: "#fff",
                        elevation: 0,
                        height: height * 0.18,
                    },
                    headerRight: () => <CallButton />,
                    headerLeft: () => <LogoImage />,
                })}
            />
            <Stack.Screen
                name="AddClientScreen"
                component={AddClientScreen}
                options={({ route }) => ({
                    headerTitle: "Mijoz qo'shish bo'limi",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 18,
                        top: 35,
                        textAlign: "center",
                    },
                    headerStyle: {
                        backgroundColor: "#F4F4F5",
                        shadowColor: "#fff",
                        elevation: 0,
                        height: height * 0.2,
                    },
                    headerRight: () => <CallButton />,
                    headerLeft: () => <LogoImage />,
                })}
            />
            <Stack.Screen
                name="ModeratorsScreen"
                component={ModeratorsScreen}
                options={({ route }) => ({
                    headerTitle: "Moderator bo'limi",
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
                    headerRight: () => <CallButton />,
                    headerLeft: () => <LogoImage />,
                })}
            />
            <Stack.Screen
                name="ClientFromModerators"
                component={ClientFromModerators}
                options={({ route }) => ({
                    headerTitle: "",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 18,
                        top: 25,
                        textAlign: "center",
                    },
                    headerStyle: {
                        shadowColor: "#fff",
                        elevation: 0,
                        height: Dimensions.get("window").height / 6,
                    },
                    // title: route.params.id,
                    headerRight: () => <CallButton />,
                    headerLeft: () => <LogoImage />,
                })}
            />
            <Stack.Screen
                name="OrdersScreen"
                component={OrdersScreen}
                options={({ route }) => ({
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 18,
                        // top: 25,
                        textAlign: "center",
                    },
                    headerStyle: {
                        shadowColor: "#fff",
                        elevation: 0,
                        // height: Dimensions.get("window").height / 5.8,
                    },
                    // title: route.params.id,
                    headerRight: () => null,
                    headerLeft: () => null,
                })}
            />
            <Stack.Screen
                name="TransportScreen"
                component={TransportScreen}
                options={({ route }) => ({
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 18,
                        // top: 25,
                        textAlign: "center",
                    },
                    headerStyle: {
                        shadowColor: "#fff",
                        elevation: 0,
                        backgroundColor: "#F5F5F5",
                        // height: Dimensions.get("window").height / 5.8,
                    },
                    // title: route.params.id,
                    headerRight: () => null,
                    headerLeft: () => null,
                })}
            />
            <Stack.Screen
                name="TransportDetailScreen"
                component={TransportDetailScreen}
                options={({ route }) => ({
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 18,
                        // top: 25,
                        textAlign: "center",
                    },
                    headerStyle: {
                        shadowColor: "#fff",
                        elevation: 0,
                        backgroundColor: "#F5F5F5",
                        // height: Dimensions.get("window").height / 5.8,
                    },
                    // title: route.params.id,
                    headerRight: () => null,
                    headerLeft: () => null,
                })}
            />
            <Stack.Screen
                name="ReadyProductDetailScreen"
                component={ReadyProductDetailScreen}
                options={({ route }) => ({
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 18,
                        // top: 25,
                        textAlign: "center",
                    },
                    headerStyle: {
                        shadowColor: "#fff",
                        elevation: 0,
                        backgroundColor: "#F5F5F5",
                        // height: Dimensions.get("window").height / 5.8,
                    },
                    // title: route.params.id,
                    headerRight: () => null,
                    headerLeft: () => null,
                })}
            />
            <Stack.Screen
                name="Transport1"
                component={Transport1}
                options={({ route }) => ({
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 18,
                        // top: 25,
                        textAlign: "center",
                    },
                    headerStyle: {
                        shadowColor: "#fff",
                        elevation: 0,
                        backgroundColor: "#F5F5F5",
                        // height: Dimensions.get("window").height / 5.8,
                    },
                    // title: route.params.id,
                    headerRight: () => null,
                    headerLeft: () => null,
                })}
            />
            <Stack.Screen
                name="Transport2"
                component={Transport2}
                options={({ route }) => ({
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 18,
                        // top: 25,
                        textAlign: "center",
                    },
                    headerStyle: {
                        shadowColor: "#fff",
                        elevation: 0,
                        backgroundColor: "#F5F5F5",
                        // height: Dimensions.get("window").height / 5.8,
                    },
                    // title: route.params.id,
                    headerRight: () => null,
                    headerLeft: () => null,
                })}
            />
            <Stack.Screen
                name="CourierAddOrder"
                component={TransportCourierOrderScreen}
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
                        backgroundColor: "#F5F5F5",
                        height: Dimensions.get("window").height / 5.8,
                    },
                    // title: route.params.id,
                    headerRight: () => null,
                    headerLeft: () => null,
                })}
            />
            <Stack.Screen
                name="StatisticsScreen"
                component={CourierAddOrderInfoScreen}
                options={({ route }) => ({
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 18,
                        // top: 25,
                        textAlign: "center",
                    },
                    headerStyle: {
                        shadowColor: "#fff",
                        elevation: 0,
                        backgroundColor: "#F5F5F5",
                        // height: Dimensions.get("window").height / 5.8,
                    },
                    // title: route.params.id,
                    headerRight: () => null,
                    headerLeft: () => null,
                })}
            />
            <Stack.Screen
                name="StaffsScreen"
                component={StaffsScreen}
                options={({ route }) => ({
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 18,
                        // top: 25,
                        textAlign: "center",
                    },
                    headerStyle: {
                        shadowColor: "#fff",
                        elevation: 0,
                        backgroundColor: "#F5F5F5",
                        // height: Dimensions.get("window").height / 5.8,
                    },
                    // title: route.params.id,
                    headerRight: () => null,
                    headerLeft: () => null,
                })}
            />
            <Stack.Screen
                name="HistoryScreen"
                component={HistoryScreen}
                options={({ route }) => ({
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 18,
                        // top: 25,
                        textAlign: "center",
                    },
                    headerStyle: {
                        shadowColor: "#fff",
                        elevation: 0,
                        backgroundColor: "#F5F5F5",
                        // height: Dimensions.get("window").height / 5.8,
                    },
                    // title: route.params.id,
                    headerRight: () => null,
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
                    title: "Super Admin's Menu",
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
                name="SearchScreen"
                component={SearchScreen}
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
                name="QRCodeSCreen"
                component={QRCodeScreen}
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

const AppStack = (route) => {
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
                        <Feather name="bell" size={24} color={color} />
                    ),
                })}
            />
            <StaffTab.Screen
                name="Search"
                component={SearchStack}
                options={({ route }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="search" size={24} color={color} />
                    ),
                })}
            />
            <StaffTab.Screen
                name="Menu"
                component={MenuStack}
                options={({ route }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="menu" size={24} color={color} />
                    ),
                })}
            />
            <StaffTab.Screen
                name="QRCode"
                component={QRCodeStack}
                options={({ route }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="qr-code-2"
                            size={24}
                            color={color}
                        />
                    ),
                })}
            />
            <StaffTab.Screen
                name="Settings"
                component={SettingsStack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="settings" size={24} color={color} />
                    ),
                }}
            />
        </StaffTab.Navigator>
    );
};

export default AppStack;
