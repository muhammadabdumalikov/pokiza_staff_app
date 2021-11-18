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
    ImageBackground,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
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
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
    const [startCamera, setStartCamera] = useState(false);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);
    const [flashMode, setFlashMode] = useState("off");

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

    let camera;

    const __startCamera = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        console.log(status);
        if (status === "granted") {
            setStartCamera(true);
        } else {
            Alert.alert("Access denied");
        }
    };

    const __takePicture = async () => {
        const photo = await camera.takePictureAsync({ quality: 1 });
        console.log(photo);
        setPreviewVisible(true);
        setCapturedImage(photo);
    };

    const retakePicture = () => {
        setCapturedImage(null);
        setPreviewVisible(false);
        __startCamera();
    };

    const __handleFlashMode = () => {
        if (flashMode === "on") {
            setFlashMode("off");
        } else if (flashMode === "off") {
            setFlashMode("on");
        } else {
            setFlashMode("auto");
        }
    };

    const __switchCamera = () => {
        if (cameraType === "back") {
            setCameraType("front");
        } else {
            setCameraType("back");
        }
    };

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

            <Modal style={styles.cameraBox} visible={useCamera}>
                <View style={styles.camera}>
                    {previewVisible && capturedImage ? (
                        <CameraPreview
                            photo={capturedImage}
                            savePhoto={() => setUseCamera(!useCamera)}
                            retakePicture={retakePicture}
                        />
                    ) : (
                        <Camera
                            type={cameraType}
                            flashMode={flashMode}
                            style={{ flex: 1 }}
                            ref={(r) => {
                                camera = r;
                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    width: "100%",
                                    backgroundColor: "transparent",
                                    flexDirection: "row",
                                }}
                            ></View>
                        </Camera>
                    )}
                </View>

                <View style={styles.cameraOptions}>
                    <TouchableOpacity
                        style={styles.cameraOption}
                        onPress={() => setUseCamera(false)}
                    >
                        <Ionicons
                            name="md-save-sharp"
                            size={32}
                            color="black"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.cameraOption}
                        onPress={__takePicture}
                    >
                        <View style={styles.shot}></View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.cameraOption}
                        onPress={() => {
                            setCameraType(
                                cameraType === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}
                    >
                        <Ionicons
                            name="camera-reverse"
                            size={32}
                            color="black"
                        />
                    </TouchableOpacity>
                </View>
            </Modal>

            <View style={styles.photoBox}>
                {capturedImage ? (
                    <ImageBackground
                        source={{ uri: capturedImage && capturedImage.uri }}
                        imageStyle={{ resizeMode: "contain" }}
                        style={{ flex: 1 }}
                    />
                ) : (
                    <View style={styles.cameraBtn}>
                        <TouchableOpacity onPress={() => setUseCamera(true)}>
                            <Ionicons name="camera" size={48} color="black" />
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

const CameraPreview = ({ photo, retakePicture, savePhoto }) => {
    return (
        <View
            style={{
                backgroundColor: "transparent",
                flex: 1,
                width: "100%",
                height: "100%",
            }}
        >
            <ImageBackground
                source={{ uri: photo && photo.uri }}
                style={{
                    flex: 1,
                }}
            ></ImageBackground>
        </View>
    );
};

export default CourierAddOrderInfoScreen;
