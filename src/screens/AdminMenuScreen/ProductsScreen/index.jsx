import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Dimensions } from "react-native";

import ProductListScreen from "./ProductsList";
import OrderListScreen from "./OrdersList";

const Tab = createMaterialTopTabNavigator();

const height = Dimensions.get("window").height;

const ProductsScreen = () => {
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
                    textTransform: "none",
                    fontWeight: "bold",
                    fontSize: 14,
                },
                tabBarPressColor: "#E5E5E7",
                tabBarContentContainerStyle: {
                    alignItems: "center",
                },
                tabBarStyle: {
                    marginVertical: 10,
                    height: 35,
                    alignSelf: "center",
                    justifyContent: "center",
                    width: "90%",
                    borderRadius: 8,
                    backgroundColor: "#E5E5E7",
                },
            }}
        >
            <Tab.Screen name="Boshqalar" component={OrderListScreen} />
            <Tab.Screen name="Yetkazildi" component={ProductListScreen} />
        </Tab.Navigator>
    );
};

export default ProductsScreen;
