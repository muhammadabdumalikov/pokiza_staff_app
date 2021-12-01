import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "./AuthProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";

import SignInScreen from "../screens/SignInScreen";
import AppStack from "./AppStack";
import TransportCourierOrderScreen from "../screens/AdminMenuScreen/TransportScreen/TransporCourierOrderScreen";

export const Routes = () => {
    const [token, setToken] = useState("");
    const [initializing, setInitializing] = useState(true);

    useEffect(() => {
        async function getData() {
            try {
                const value = await AsyncStorage.getItem("staff_token");
                if (value !== null) {
                    setToken(value);
                }
            } catch (e) {
                console.log(e);
            }
        }
        getData();
    }, []);

    return (
        <NavigationContainer>
            {!token ? <SignInScreen /> : <AppStack />}
            {/* <AppStack/> */}
        </NavigationContainer>
    );
};
