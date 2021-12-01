import React, { useContext, useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Alert,
} from "react-native";
import { AuthContext } from "../../navigation/AuthProvider";
import { useQuery, useMutation, gql } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";
import { request } from "../../helpers/request";

const mainContact = "998946209914";
const mainPassword = "root";

const height = Dimensions.get("window").height;

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

const SignInScreen = ({ navigation }) => {
    const [verify, { loading }] = useMutation(LOGIN);
    const [value, setValue] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("998946209914");
    const [password, setPassword] = useState("root");
    // const [loading, setLoading] = useState(true);

    const confirmSecondContact = () =>
    Alert.alert("Xatolik!", "Login yoki parol noto'g'ri kiritilgan!", [
        {
            text: "Qaytadan kiritish",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
        },
        // { text: "Ha, xohlayman", onPress: () => console.log("OK Pressed") },
    ]);

    const handleSubmit = () => {
        verify({
            variables: {
                mainContact: phoneNumber,
                password: password,
            },
        })
            .then(({ data }) => {
                console.log(data)
                if (data.loginStaff.status == 200) {
                    AsyncStorage.setItem("staff_token", data.loginStaff.token);
                } else {
                    confirmSecondContact()
                }

            })
            .catch((err) => {
                console.log(err);
            });
    };

    // if (isLoading) return null;
    // console.log(data, loading, error);

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

    // data = await request(LOGIN, {
    //     mainContact: username,
    //     password: password,
    // });

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
        >
            <View style={styles.logoBox}>
                <Text style={styles.signIn}>Sign In</Text>
                <Text style={styles.signInDescription}>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure
                </Text>
            </View>
            <View style={styles.signInBox}>
                <View
                    style={styles.inputContainer}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <View style={styles.preTextWrapperStyle}>
                        <Text style={styles.preText}>Number</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        numberOfLines={1}
                        placeholder="Enter phone number"
                        placeholderTextColor="#B8B8BB"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        keyboardType="phone-pad"
                        // autoFocus={true}
                        maxLength={12}
                    />
                </View>
                <View
                    style={{ ...styles.inputContainer, bottom: height / 4.3 }}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <View style={styles.preTextWrapperStyle}>
                        <Text style={styles.preText}>Password</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        numberOfLines={1}
                        placeholder="Enter password"
                        placeholderTextColor="#B8B8BB"
                        value={password}
                        onChangeText={setPassword}
                        keyboardType="phone-pad"
                        // autoFocus={true}
                        maxLength={12}
                    />
                </View>

                <TouchableOpacity
                    style={styles.sendCodeWrapper}
                    onPress={handleSubmit}
                    // disabled={loading}
                >
                    <Text style={styles.sendCodeText}>Send code</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default SignInScreen;