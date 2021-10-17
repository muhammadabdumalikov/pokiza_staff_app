import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Dimensions } from "react-native";
import WaitingScreen from "./WaitingScreen";
import ReadyScreen from "./ReadyScreen";

const Tab = createMaterialTopTabNavigator();

const height = Dimensions.get("window").height;

const TransportDetailScreen = ({navigation}) => {
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
                    borderRadius: 10,
                    backgroundColor: "white",
                    elevation: 5, // shadow on Android
                    shadowRadius: 4, // shadow blur on iOS
                    shadowOpacity: 0.1, // shadow on iOS,
                },
                tabBarLabelStyle: {
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    fontSize: 16,

                },
                tabBarPressColor: "#E5E5E7",
                tabBarContentContainerStyle: {
                    alignItems: "center",
                },
                tabBarStyle: {
                    marginVertical: 16,
                    height: height/18.45,
                    alignSelf: "center",
                    justifyContent: "center",
                    width: "90%",
                    borderRadius: 10,
                    borderColor: "blue",
                    backgroundColor: "#E5E5E7",
                },
            }}
        >
            <Tab.Screen name="Waiting" component={WaitingScreen} />
            <Tab.Screen name="Ready" component={ReadyScreen} />
        </Tab.Navigator>
    );
};

export default TransportDetailScreen;
