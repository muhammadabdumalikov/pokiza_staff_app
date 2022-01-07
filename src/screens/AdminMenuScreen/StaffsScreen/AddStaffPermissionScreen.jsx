import React, { useState } from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { colors } from "../../../constants/color";

import { styles } from "./styles";

const AddPermissonScreen = ({ navigation }) => {
    const [permissions, setPermissions] = useState([]);
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

    const permission = () => {
        return (
            <BouncyCheckbox
                size={25}
                fillColor="red"
                unfillColor="#FFFFFF"
                text="Custom Checkbox"
                iconStyle={{ borderColor: colors.green, borderRadius: 3 }}
                onPress={(isChecked) => {}}
            />
        );
    };
    return (
        <View>
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

            <Text>Guruhlar</Text>

            {/* Staff permissions ------------------------------------------------------- */}
            <View style={styles.permissionsBox}>
                <Pressable style={styles.permissionBtn}>
                    <Text>Moderator</Text>
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

            <Text>Huquqlar</Text>

            <FlatList
                data={data}
                renderItem={permission}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default AddPermissonScreen;
