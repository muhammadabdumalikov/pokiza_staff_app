import React, { useContext, useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Alert,
    ActivityIndicator,
} from "react-native";
import { AuthContext } from "../../navigation/AuthProvider";
import { useQuery, useMutation, gql } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { request } from "../../helpers/request";

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
    const [phoneNumber, setPhoneNumber] = useState();
    const [password, setPassword] = useState();
    const [send, setSend] = useState(false);

    // const navigation = useNavigation()
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
        setSend(true);

        verify({
            variables: {
                mainContact: phoneNumber,
                password: password,
            },
        })
            .then(({ data }) => {
                if (data.loginStaff.status == 200) {
                    AsyncStorage.setItem("staff_token", data.loginStaff.token);
                    navigation.reset({
                        index: 0,
                        routes: [
                            {
                                name: "AppStack",
                            },
                        ],
                    });
                    setSend(false);
                } else {
                    confirmSecondContact();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
        >
            <View style={styles.logoBox}>
                <Text style={styles.signIn}>Tizimga kirish</Text>
                <Text style={styles.signInDescription}>
                    Tizimga kirish uchun telefon raqamingizni kiriting.
                </Text>
            </View>
            <View style={styles.signInBox}>
                <View
                    style={styles.inputContainer}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <View style={styles.preTextWrapperStyle}>
                        <Text style={styles.preText}>Telefon Raqam:</Text>
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text
                            style={{
                                fontSize: 18,
                                color: "black",
                                textAlignVertical: "center",
                                paddingLeft: 10,
                            }}
                        >
                            +998
                        </Text>
                        <TextInput
                            style={styles.input}
                            numberOfLines={1}
                            placeholderTextColor="#B8B8BB"
                            onChangeText={(number) =>
                                setPhoneNumber(`998${number}`)
                            }
                            keyboardType="phone-pad"
                            maxLength={9}
                        />
                    </View>
                </View>
                <View
                    style={styles.inputContainer}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <View style={styles.preTextWrapperStyle}>
                        <Text style={styles.preText}>Parol:</Text>
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.input}
                            numberOfLines={1}
                            placeholderTextColor="#B8B8BB"
                            placeholder="Parolni kiriting"
                            onChangeText={(value) => setPassword(value)}
                            keyboardType="default"
                            maxLength={9}
                        />
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.sendCodeWrapper}
                    onPress={handleSubmit}
                    disabled={loading}
                >
                    {send ? (
                        <View
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <ActivityIndicator
                                size="large"
                                color="white"
                                style={{ alignSelf: "center" }}
                            />
                        </View>
                    ) : (
                        <Text style={styles.sendCodeText}>Davom etish</Text>
                    )}
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default SignInScreen;
