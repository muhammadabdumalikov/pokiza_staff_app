import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Dimensions } from "react-native";

import ClientInfo from "./ClientInfo";
import ClientOrders from "./ClientOrders";

const Tab = createMaterialTopTabNavigator();

const height = Dimensions.get("window").height;

const ClientFromModerators = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "gray",
                tabBarIndicatorStyle: {
                    height: null,
                    top: "5%",
                    bottom: "5%",
                    width: "45%",
                    left: "2.5%",
                    borderRadius: 6,
                    backgroundColor: "white",
                    elevation: 15, // shadow on Android
                    shadowRadius: 4, // shadow blur on iOS
                    shadowOpacity: 0.1, // shadow on iOS,
                },
                tabBarLabelStyle: {
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    fontSize: 16
                },
                tabBarPressColor: "#E5E5E7",
                tabBarContentContainerStyle: {
                    alignItems: "center",
                },
                tabBarStyle: {
                    marginVertical: 16,
                    height: 35,
                    alignSelf: "center",
                    justifyContent: "center",
                    width: "90%",
                    borderRadius: 8,
                    borderColor: "blue",
                    backgroundColor: "#E5E5E7",
                },
            }}
        >
            <Tab.Screen name="ClientInfo" component={ClientInfo} />
            <Tab.Screen name="ClientOrders" component={ClientOrders} />
        </Tab.Navigator>
    );
};

export default ClientFromModerators;
