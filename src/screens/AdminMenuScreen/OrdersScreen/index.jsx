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
                    borderRadius: 10,
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
                tabBarPressColor: "white",
                tabBarStyle: {
                    marginVertical: 16,
                    height: 50,
                    alignSelf: "center",
                    justifyContent: "center",
                    width: "90%",
                    borderRadius: 10,
                    borderColor: "blue",
                    backgroundColor: "#E5E5E7",
                },
            }}
        >
            <Tab.Screen name="Order List" component={ModeratorsScreen} />
            <Tab.Screen name="Product List" component={ModeratorsScreen} />
        </Tab.Navigator>
    );
};

export default OrdersScreen;
