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
        </View>
    );
};

export default AddPermissonScreen;
