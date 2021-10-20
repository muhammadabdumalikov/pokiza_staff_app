import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { AuthContext } from "../../navigation/AuthProvider";

import styles from "./styles";

const SignInScreen = () => {
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState("login username");
    const [password, setPassword] = useState();

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

                <TouchableOpacity onPress={()=> login(username, password)} style={styles.btn}>
                    <Text>Goo</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignInScreen;
