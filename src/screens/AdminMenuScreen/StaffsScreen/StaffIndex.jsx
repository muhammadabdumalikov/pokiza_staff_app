import React, { useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Dimensions } from "react-native";

import StaffInfo from "./StaffInfo";
import AddPermissonScreen from "./AddStaffPermissionScreen";

const Tab = createMaterialTopTabNavigator();

const height = Dimensions.get("window").height;

const StaffIndex = ({ route }) => {
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
            <Tab.Screen
                name="StaffInfo"
                component={StaffInfo}
                options={{ title: "Mijoz ma'lumotlari" }}
                initialParams={{ staffId: route.params.staffId }}
            />
            <Tab.Screen
                name="AddPermissonScreen"
                component={AddPermissonScreen}
                options={{ title: "Buyurtmalari" }}
                initialParams={{ staffId: route.params.staffId }}
            />
        </Tab.Navigator>
    );
};

export default StaffIndex;
