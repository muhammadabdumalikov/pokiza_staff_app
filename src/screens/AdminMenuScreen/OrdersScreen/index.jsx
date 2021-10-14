import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ModeratorsScreen from "../ModeratorsScreen";

const Tab = createMaterialTopTabNavigator();

const OrdersScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "gray",
                tabBarIndicatorStyle: {
                    height: null,
                    top: "10%",
                    bottom: "10%",
                    width: "45%",
                    left: "2.5%",
                    borderRadius: 100,
                    backgroundColor: "white",
                },
                tabBarPressColor: "white",
                tabBarStyle: {
                    marginVertical: 16,
                    height: 50,
                    alignSelf: "center",
                    justifyContent: "center",
                    width: "90%",
                    borderRadius: 50,
                    borderColor: "blue",
                    backgroundColor: "#E5E5E7",
                    elevation: 5, // shadow on Android
                    shadowOpacity: 0.1, // shadow on iOS,
                    shadowRadius: 4, // shadow blur on iOS
                },
            }}
        >
            <Tab.Screen name="Moderator" component={ModeratorsScreen} />
            <Tab.Screen name="Moderator2" component={ModeratorsScreen} />
        </Tab.Navigator>
    );
};

export default OrdersScreen;
