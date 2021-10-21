import { useRoute } from "@react-navigation/core";
import React, { createContext, useState } from "react";
import { Text } from "react-native";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [phoneNumber, setPhoneNumber] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [code, setCode] = useState(null);
    const [state, setState] = useState();
    const [region, setRegion] = useState();
    const [area, setArea] = useState();
    const [branch, setBranch] = useState();

    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                firstName,
                setFirstName,
                lastName,
                setLastName,
                age,
                setAge,
                gender,
                setGender,
                phoneNumber,
                setPhoneNumber,
                code,
                setCode,
                state,
                setState,
                region,
                setRegion,
                area,
                setArea,
                branch,
                setBranch,
                isLoading,
                setIsLoading,
                userToken,
                setUserToken,
                signIn: async (username, password) => {
                    try {
                        console.log(username, password);
                        setUserToken("dff");
                        setIsLoading(false);
                    } catch (e) {
                        console.log(e);
                    }
                },
                signUp: async () => {
                    try {
                        setUserToken("dff");
                        setIsLoading(false);
                    } catch (error) {
                        console.log(error);
                    }
                },
                signOut: async (phone) => {
                    try {
                        setUserToken(null);
                        setIsLoading(false);
                    } catch (e) {
                        console.log(e);
                    }
                },
            }}
        >
            <AuthContext.Consumer>{() => children}</AuthContext.Consumer>
        </AuthContext.Provider>
    );
};
