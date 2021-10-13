import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "./AuthProvider";

import AppStack from "./AppStack";

export const Routes = () => {
    const { user, setUser } = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    useEffect(() => {}, []);

    return (
        <NavigationContainer>
            {/* <SignInScreen /> */}
            <AppStack />
        </NavigationContainer>
    );
};
