import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
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

import { Dimensions } from "react-native";
import AdminMenuScreen from "../screens/AdminMenuScreen";
import ContactsScreen from "../screens/AdminMenuScreen/ContactsScreen";
import { AuthContext } from "./AuthProvider";
import ModeratorsScreen from "../screens/AdminMenuScreen/ModeratorsScreen";
import OrdersScreen from "../screens/AdminMenuScreen/OrdersScreen";
import TransportScreen from "../screens/AdminMenuScreen/TransportScreen";

const RoutesNames = {
    Menu: <Feather name="menu" size={24} color="black" />,
    Contacts: <AntDesign name="contacts" size={24} color="black" />,
    Moderators: <MaterialIcons name="person-outline" size={24} color="black" />,
    Orders: (
        <MaterialCommunityIcons
            name="clipboard-list-outline"
            size={24}
            color="black"
        />
    ),
    Transports: <Ionicons name="ios-car-outline" size={24} color="black" />,
    Finance: <Feather name="trending-up" size={24} color="black" />,
    Statistics: <Feather name="trending-up" size={24} color="black" />,
    Staffs: <Feather name="users" size={24} color="black" />,
    History: <MaterialIcons name="history" size={24} color="black" />,
};

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
                        fontSize: 24,
                        textAlign: "center",
                    },
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
                        <TouchableOpacity
                            style={{ marginRight: 20, marginTop: 40 }}
                        >
                            <Feather name="phone" size={24} color="#007AFF" />
                        </TouchableOpacity>
                    ),
                    headerLeft: () => null,
                })}
            />
            <Stack.Screen
                name="ModeratorsScreen"
                component={ModeratorsScreen}
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
                    headerRight: () => null,
                    headerLeft: () => null,
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
