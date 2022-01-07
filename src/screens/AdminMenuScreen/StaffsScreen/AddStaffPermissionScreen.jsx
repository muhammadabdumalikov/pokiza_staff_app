import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import { styles } from "./styles";

const AddPermissonScreen = ({ navigation }) => {
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
            </View>
        </View>
    );
};

export default AddPermissonScreen;