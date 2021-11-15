import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Modal,
    FlatList,
    Pressable,
    TextInput,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Camera } from "expo-camera";

import { styles } from "./styles";
import { colors } from "../../../../constants/color";

const CourierAddOrderInfoScreen = ({ navigation }) => {
    let [selectedStatus, setSelectedStatus] = useState();
    let [selectedTariff, setSelectedTariff] = useState();
    let [statusModalVisible, setStatusModalVisible] = useState(false);
    let [tariffModalVisible, setTariffModalVisible] = useState(false);

    const [hasPermission, setHasPermission] = useState(null);
    const [useCamera, setUseCamera] = useState(false);
    const [type, setType] = useState(Camera.Constants.Type.back);

    const productsList = [{ id: "1", name: "Gilam" }];
    const tariffList = [
        { id: "1", name: "Oddiy" },
        { id: "2", name: "Tezkor" },
    ];

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            if (useCamera) setHasPermission(status === "granted");
        })();
    }, []);

    // if (hasPermission === null) {
    //     return <View />;
    // }
    // if (hasPermission === false) {
    //     return <Text>No access to camera</Text>;
    // }

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
                    {item.name}
                </Text>
            </TouchableOpacity>
        );
    };

    const modalTariff = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ width: "80%", paddingVertical: 15 }}
                onPress={() => {
                    setSelectedTariff(item);
                    setTariffModalVisible(!tariffModalVisible);
                }}
            >
                <Text style={{ flex: 1, fontSize: 15, color: "#2196F3" }}>
                    {`${item.name}(${item.id == "1" ? "Bepul" : "10.000 sum"})`}
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
            {/* Product input ------------------------------------------------- */}
            <View style={styles.pickerWrapper}>
                <View style={styles.preTextWrapperStyle}>
                    <Text style={styles.preText}>Product</Text>
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
                        <View
                            style={[
                                styles.modalWrapper,
                                styles.genderModalWrapper,
                            ]}
                        >
                            <FlatList
                                data={productsList}
                                renderItem={modalStatus}
                                keyExtractor={(item) => item.id}
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
                            ? selectedStatus.name
                            : "Add Status"}
                    </Text>
                </Pressable>
            </View>

            {/* Size input ------------------------------------- */}
            <View style={styles.prductInfo}>
                <View style={styles.inputContainer}>
                    <View style={styles.productSize}>
                        <Text style={styles.sizeText}>Eni</Text>
                        <TextInput
                            style={styles.sizeInput}
                            placeholder="Add size"
                        />
                    </View>
                    <View style={styles.productSize}>
                        <Text style={styles.sizeText}>Bo'y</Text>
                        <TextInput
                            style={styles.sizeInput}
                            placeholder="Add size"
                        />
                    </View>
                </View>

                {/* Surface input ------------------------------------- */}
                <View style={styles.infoLine}>
                    <Text>Yuza</Text>
                    <TextInput placeholder="Add size" />
                </View>

                {/* Tariff input ------------------------------------- */}
                <View style={styles.infoLine}>
                    <Text>Tariff turi</Text>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={tariffModalVisible}
                        onRequestClose={() => {
                            setTariffModalVisible(!tariffModalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View
                                style={[
                                    styles.modalWrapper,
                                    styles.genderModalWrapper,
                                ]}
                            >
                                <FlatList
                                    data={tariffList}
                                    renderItem={modalTariff}
                                    keyExtractor={(item) => item.id}
                                    contentContainerStyle={styles.modalView}
                                    style={styles.contenModalView}
                                    showsVerticalScrollIndicator={false}
                                />
                            </View>
                            <Pressable
                                style={styles.buttonClose}
                                onPress={() =>
                                    setTariffModalVisible(!tariffModalVisible)
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
                        onPress={() => setTariffModalVisible(true)}
                    >
                        <Text style={styles.textStyle}>
                            {selectedTariff != undefined
                                ? selectedTariff.name
                                : "Add Tariff"}
                        </Text>
                    </Pressable>
                </View>

                {/* Total Price input ------------------------------------- */}
                <View style={styles.infoLine}>
                    <Text>Narxi</Text>
                    <TextInput placeholder="Yuza * 10.000" />
                </View>
            </View>

            <Camera style={styles.camera} type={type}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}
                    >
                        <Text style={styles.text}> Flip </Text>
                    </TouchableOpacity>
                </View>
            </Camera>

            <TouchableOpacity onPress={()=> setUseCamera(!useCamera)}><Text>Camera</Text></TouchableOpacity>
        </ScrollView>
    );
};

export default CourierAddOrderInfoScreen;
