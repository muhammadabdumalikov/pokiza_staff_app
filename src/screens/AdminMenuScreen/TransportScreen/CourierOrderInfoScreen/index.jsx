import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "./styles";
import { TextInput } from "react-native-gesture-handler";
import { colors } from "../../../../constants/color";

const CourierAddOrderInfoScreen = ({ navigation }) => {
    let [selectedStatus, setSelectedStatus] = useState();
    const [statusModalVisible, setStatusModalVisible] = useState(false);

    const modalStatus = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ width: "80%", paddingVertical: 15 }}
                onPress={() => {
                    setSelectedStatus(item);
                    setStatusModalVisible(!statusModalVisible);
                }}
            >
                <Text style={{ flex: 1, fontSize: 15, color: "#2196F3" }}>
                    {item.label}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentStyle}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.pickerWrapper}>
                <View style={styles.preTextWrapperStyle}>
                    <Text style={styles.preText}>Status</Text>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={statusModalVisible}
                    onRequestClose={() => {
                        setStatusModalVisible(!statusModalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalWrapper}>
                            <FlatList
                                data={clientStatus}
                                renderItem={modalStatus}
                                keyExtractor={(item) => item.key}
                                contentContainerStyle={styles.modalView}
                                style={styles.contenModalView}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                        <Pressable
                            style={styles.buttonClose}
                            onPress={() =>
                                setStatusModalVisible(!statusModalVisible)
                            }
                        >
                            <Text style={styles.hideModalButton}>
                                Hide Modal
                            </Text>
                        </Pressable>
                    </View>
                </Modal>
                <Pressable
                    style={styles.buttonOpen}
                    onPress={() => setStatusModalVisible(true)}
                >
                    <Text style={styles.textStyle}>
                        {selectedStatus != undefined
                            ? selectedStatus.label
                            : "Add Status"}
                    </Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

export default CourierAddOrderInfoScreen;
