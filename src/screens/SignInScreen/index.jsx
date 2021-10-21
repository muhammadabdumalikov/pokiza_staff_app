import React, { useContext, useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { AuthContext } from "../../navigation/AuthProvider";
import { useQuery, useMutation, gql } from "@apollo/client";

import styles from "./styles";

const mainContact = "998946209914";
const mainPassword = "root";
const url = "https://pokiza.herokuapp.com/graphql";

const LOGIN = gql`
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

const SignInScreen = () => {
    const { signUp, isLoading } = useContext(AuthContext);
    const [username, setUsername] = useState("login username");
    const [password, setPassword] = useState();

    // const { data, loading, error } = useMutation(LOGIN, {
    //     variables: { mainContact: "998946209914", password: "root" },
    // });
    // if (loading || error) return null;
    // console.log(data, loading, error);

    const data = fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `
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
            `,
            variables: {
                mainContact,
                password: mainPassword
            },
        }),
    })
        .then((res) => res.json())
        .then((result) => console.log(result));

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsLoading(false);
    //     }, 10000);
    // }, []);

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
                        await signUp(username, password);
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
