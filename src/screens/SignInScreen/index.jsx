import React, { useContext, useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { AuthContext } from "../../navigation/AuthProvider";
import { useQuery, useMutation, gql } from "@apollo/client";

import styles from "./styles";
import { request } from "../../helpers/request";

const mainContact = "998946209914";
const mainPassword = "root";

const LOGIN = `
    mutation ($mainContact: String!, $password: String!) {
        loginStaff(mainContact: $mainContact, password: $password) {
            status
            token
            message
            data
            permissions {
                branchId
                branchName
                permissionsList {
                    permissionAction
                    permissionModel
                }
            }
        }
    }
`;

const SignInScreen = ({navigation}) => {
    const { signUp, isLoading, setIsLoading, setUserToken } = useContext(AuthContext);
    const [username, setUsername] = useState("login username");
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(true)
    let data;

    // if (isLoading) return null;
    // console.log(data, loading, error);

    useEffect(() => {
        setTimeout(() => {
            // setIsLoading(false);
        }, 3000);
    }, []);

    // if (isLoading) {
    //     return (
    //         <View
    //             style={{
    //                 flex: 1,
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //             }}
    //         >
    //             <ActivityIndicator animating={true} size="large" color="blue" />
    //         </View>
    //     );
    // }

    return (
        <View style={styles.container}>
            <View style={styles.logoBox}></View>
            <View style={styles.formBox}>
                <View style={styles.inputBox}>
                    <Text style={styles.inputText}>Login</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter login"
                        selectionColor="blue"
                        value={username}
                        onChangeText={setUsername}
                    />
                </View>
                <View style={styles.inputBox}>
                    <Text style={styles.inputText}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter password"
                        selectionColor="blue"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                <TouchableOpacity
                    onPress={async () => {
                        data = await request(LOGIN, {mainContact: username, password: password})
                        setUserToken(data.loginStaff.token)
                    }}
                    style={styles.btn}
                >
                    <Text>Goo</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignInScreen;
