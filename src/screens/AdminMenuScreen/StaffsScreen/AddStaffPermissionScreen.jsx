import React, { useState } from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../../../constants/color";
import { styles } from "./styles";

const AddPermissonScreen = ({ navigation }) => {
    const [permissions, setPermissions] = useState([]);
    const [selected, setSelected] = useState(false);
    const data = [
        { id: 1, value: "Huquq" },
        { id: 2, value: "Huquq" },
        { id: 3, value: "Huquq" },
        { id: 4, value: "Huquq" },
        { id: 5, value: "Huquq" },
        { id: 6, value: "Huquq" },
        { id: 7, value: "Huquq" },
        { id: 8, value: "Huquq" },
        { id: 9, value: "Huquq" },
        { id: 10, value: "Huquq" },
        { id: 11, value: "Huquq" },
        { id: 12, value: "Huquq" },
        { id: 13, value: "Huquq" },
        { id: 14, value: "Huquq" },
        { id: 15, value: "Huquq" },
        { id: 16, value: "Huquq" },
        { id: 17, value: "Huquq" },
        { id: 18, value: "Huquq" },
    ];

    const selectedPermission = {
        box: {
            borderWidth: 1,
            borderColor: colors.blue,
            maxWidth: 120,
            maxHeight: 30,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            margin: 2,
            backgroundColor: colors.blue,
        },
        text: {
            color: "white",
        },
        white: {
            color: "black",
        },
    };

    const permission = () => {
        return (
            <BouncyCheckbox
                style={styles.permissionEl}
                size={30}
                textStyle={{ textDecorationLine: "none", color: "black" }}
                fillColor={colors.green}
                unfillColor="#FFFFFF"
                text="Custom Checkbox"
                iconStyle={{
                    borderColor: colors.lightGray,
                    borderRadius: 5,
                    backgroundColor: "white",
                }}
                onPress={(isChecked) => {}}
                ImageComponent={() => (
                    <Ionicons
                        name="ios-checkmark"
                        size={24}
                        color={colors.green}
                    />
                )}
            />
        );
    };
    return (
        <>
            <View >
                <ScrollView
                    horizontal={true}
                    style={styles.horizontalScroll}
                    containerStyle={styles.horizontalScrollContent}
                    showsHorizontalScrollIndicator={false}
                >
                    <Pressable style={styles.horizontalCity}>
                        <Text style={styles.horizontalCityText}>Toshkent</Text>
                    </Pressable>
                    <Pressable style={styles.horizontalCity}>
                        <Text style={styles.horizontalCityText}>Toshkent</Text>
                    </Pressable>
                    <Pressable style={styles.horizontalCity}>
                        <Text style={styles.horizontalCityText}>Toshkent</Text>
                    </Pressable>
                    <Pressable style={styles.horizontalCity}>
                        <Text style={styles.horizontalCityText}>Toshkent</Text>
                    </Pressable>
                    <Pressable style={styles.horizontalCity}>
                        <Text style={styles.horizontalCityText}>Toshkent</Text>
                    </Pressable>
                    <Pressable style={styles.horizontalCity}>
                        <Text style={styles.horizontalCityText}>Toshkent</Text>
                    </Pressable>
                    <Pressable style={styles.horizontalCity}>
                        <Text style={styles.horizontalCityText}>Toshkent</Text>
                    </Pressable>
                </ScrollView>
            </View>
            <View>
                <Text style={styles.title}>Guruhlar</Text>

                <View style={styles.permissionsBox}>
                    <Pressable
                        style={
                            selected
                                ? selectedPermission.box
                                : styles.permissionBtn
                        }
                        onPress={() => setSelected(!selected)}
                    >
                        <Text
                            style={
                                selected
                                    ? selectedPermission.text
                                    : selectedPermission.white
                            }
                        >
                            Moderator
                        </Text>
                    </Pressable>
                    <Pressable style={styles.permissionBtn}>
                        <Text>Moderator</Text>
                    </Pressable>
                    <Pressable style={styles.permissionBtn}>
                        <Text>Moderator</Text>
                    </Pressable>
                    <Pressable style={styles.permissionBtn}>
                        <Text>Mode</Text>
                    </Pressable>
                    <Pressable style={styles.permissionBtn}>
                        <Text>Moderatosdadakjdlajdjakdkadahjdr</Text>
                    </Pressable>
                    <Pressable style={styles.permissionBtn}>
                        <Text>Mode</Text>
                    </Pressable>
                    <Pressable style={styles.permissionBtn}>
                        <Text>Moderatosdadakjdlajdjakdkadahjdr</Text>
                    </Pressable>
                    <Pressable style={styles.permissionBtn}>
                        <Text>Mode</Text>
                    </Pressable>
                    <Pressable style={styles.permissionBtn}>
                        <Text>Moderatosdadakjdlajdjakdkadahjdr</Text>
                    </Pressable>
                    <Pressable style={styles.permissionBtn}>
                        <Text>Mode</Text>
                    </Pressable>
                    <Pressable style={styles.permissionBtn}>
                        <Text>Moderatosdadakjdlajdjakdkadahjdr</Text>
                    </Pressable>
                </View>

                <Text style={styles.title}>Huquqlar</Text>

                <FlatList
                    style={styles.permissionsList}
                    data={data}
                    renderItem={permission}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </>
    );
};

export default AddPermissonScreen;
