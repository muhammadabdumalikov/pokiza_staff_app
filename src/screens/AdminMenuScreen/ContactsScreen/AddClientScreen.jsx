import React, { useState, useEffect } from "react";
import {
    ScrollView,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Dimensions,
    Platform,
    ActivityIndicator,
    Modal,
    Pressable,
    FlatList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Collapsible from "react-native-collapsible";
import ModalSelector from "react-native-modal-selector";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { Entypo, Ionicons, Feather } from "@expo/vector-icons";

import { request } from "../../../helpers/request";
import { sliderStyles, styles } from "./styles";

const height = Dimensions.get("window").height;

const AddClientScreen = ({ navigation, route }) => {
    const ALL_CLIENTS_QUERY = `query($clientStatus: Int! = 1, $age: Int = null, $gender: Int = null){
        clients(clientStatus: $clientStatus, age: $age, gender: $gender ){
          clientId
          clientStatus
          clientSummary
          clientInfo{
            userId
            mainContact
            secondContact
            firstName
            lastName
            age
            gender
            
          }
        }
      }`;

    const GET_STATE_QUERY = `{
        states {
          stateId
          stateName
        }
      }`;

    const GET_REGION_QUERY = `
    query($stateId: ID!){
        regions(stateId: $stateId){
          regionId
          regionName
        }
      }`;

    const [clients, setClients] = useState();
    const [selectedState, setSelectedState] = useState();
    let [states, setStates] = useState();
    const [selectedRegion, setSelectedRegion] = useState();
    let [regions, setRegions] = useState();
    let [isLoading, setLoading] = useState(true);
    const [collapsed, setCollapsed] = useState(true);
    let [selectedAge, setSelectedAge] = useState();
    let [selectedStatus, setSelectedStatus] = useState();
    let [selectedGender, setSelectedGender] = useState();
    const [multiSliderValue, setMultiSliderValue] = useState([16, 99]);
    let [userToken, setUserToken] = useState();

    const [statusModalVisible, setStatusModalVisible] = useState(false);
    const [stateModalVisible, setStateModalVisible] = useState(false);
    const [regionModalVisible, setRegionModalVisible] = useState(false);
    const [genderModalVisible, setGenderModalVisible] = useState(false);

    const [searchBtnVisible, setSearchBtnVisible] = useState(false);

    let firstname;
    let lastname;
    let firstPhone;
    let lastPhone;
    let summary;

    useEffect(() => {
        async function fetchData() {
            try {
                const value = await AsyncStorage.getItem("staff_token");
                setUserToken(value);
                setClients(await request(ALL_CLIENTS_QUERY, null, value));
                setStates(await request(GET_STATE_QUERY, null, value));
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            try {
                setRegions(
                    await request(
                        GET_REGION_QUERY,
                        { stateId: selectedState.stateId },
                        userToken
                    )
                );
                setSelectedRegion(null);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [selectedState]);

    const toggleExpanded = () => {
        setCollapsed(!collapsed);
    };
    const multiSliderValuesChange = (values) => setMultiSliderValue(values);

    const genderData = [
        { key: "1", label: "Male" },
        { key: "2", label: "Female" },
    ];

    const clientStatus = [
        { key: "1", label: "Normal" },
        { key: "2", label: "Good" },
        { key: "3", label: "Favourites" },
        // etc...
        // Can also add additional custom keys which are passed to the onChange callback
        { key: "4", label: "Black-list" },
    ];

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

    const modalState = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ width: "80%", paddingVertical: 15 }}
                onPress={() => {
                    setSelectedState(item);
                    setStateModalVisible(!stateModalVisible);
                }}
            >
                <Text style={{ flex: 1, fontSize: 15, color: "#2196F3" }}>
                    {item.stateName}
                </Text>
            </TouchableOpacity>
        );
    };

    const modalRegion = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ width: "80%", paddingVertical: 15 }}
                onPress={() => {
                    setSelectedRegion(item);
                    setRegionModalVisible(!regionModalVisible);
                }}
            >
                <Text style={{ flex: 1, fontSize: 15, color: "#2196F3" }}>
                    {item.regionName}
                </Text>
            </TouchableOpacity>
        );
    };

    const modalGender = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ width: "80%", paddingVertical: 15 }}
                onPress={() => {
                    setSelectedGender(item);
                    setGenderModalVisible(!genderModalVisible);
                }}
            >
                <Text style={{ flex: 1, fontSize: 15, color: "#2196F3" }}>
                    {item.label}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <>
            {isLoading ? (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ActivityIndicator
                        size="large"
                        color="#2196F3"
                        style={{ alignSelf: "center" }}
                    />
                </View>
            ) : (
                <>
                    <ScrollView
                        style={styles.container}
                        contentContainerStyle={styles.contentStyle}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.content}>
                            {/* Name input --------------------------------------------------------------- */}
                            <View
                                style={{
                                    ...styles.inputContainer,
                                    marginBottom: 16,
                                }}
                                behavior={
                                    Platform.OS === "ios" ? "padding" : "height"
                                }
                            >
                                <View style={styles.preTextWrapperStyle}>
                                    <Text style={styles.preText}>Ism</Text>
                                </View>
                                <TextInput
                                    style={styles.input}
                                    numberOfLines={1}
                                    placeholder="Ism kiriting"
                                    placeholderTextColor="#B8B8BB"
                                    onChangeText={(value) =>
                                        (firstname = value)
                                    }
                                    keyboardType="default"
                                    // autoFocus={true}
                                    maxLength={9}
                                />
                            </View>

                            {/* Surname input --------------------------------------------------------------- */}
                            <View
                                style={{
                                    ...styles.inputContainer,
                                    marginBottom: 16,
                                }}
                                behavior={
                                    Platform.OS === "ios" ? "padding" : "height"
                                }
                            >
                                <View style={styles.preTextWrapperStyle}>
                                    <Text style={styles.preText}>Familiya</Text>
                                </View>
                                <TextInput
                                    style={styles.input}
                                    numberOfLines={1}
                                    placeholder="Familiya kiriting"
                                    placeholderTextColor="#B8B8BB"
                                    onChangeText={(value) => (lastname = value)}
                                    keyboardType="default"
                                    // autoFocus={true}
                                    maxLength={9}
                                />
                            </View>

                            {/* First Phone Num input --------------------------------------------------------------- */}
                            <View style={styles.phoneTxtWrapper}>
                                <Text style={styles.phoneTxt}>
                                    1 - Telefon raqam:
                                </Text>
                            </View>
                            <View
                                style={{
                                    ...styles.inputContainer,
                                    marginBottom: 16,
                                    flexDirection: "column",
                                }}
                                behavior={
                                    Platform.OS === "ios" ? "padding" : "height"
                                }
                            >
                                <TextInput
                                    style={styles.input}
                                    numberOfLines={1}
                                    placeholder="Telefon raqam kiriting"
                                    placeholderTextColor="#B8B8BB"
                                    onChangeText={(value) =>
                                        (firstPhone = value)
                                    }
                                    keyboardType="phone-pad"
                                    // autoFocus={true}
                                    maxLength={9}
                                />
                            </View>

                            {/* Second Phone Num input --------------------------------------------------------------- */}
                            <View style={styles.phoneTxtWrapper}>
                                <Text style={styles.phoneTxt}>
                                    2 - Telefon raqam:
                                </Text>
                            </View>
                            <View
                                style={{
                                    ...styles.inputContainer,
                                    marginBottom: 16,
                                    flexDirection: "column",
                                }}
                                behavior={
                                    Platform.OS === "ios" ? "padding" : "height"
                                }
                            >
                                <TextInput
                                    style={styles.input}
                                    numberOfLines={1}
                                    placeholder="Telefon raqam kiriting"
                                    placeholderTextColor="#B8B8BB"
                                    onChangeText={(value) =>
                                        (lastPhone = value)
                                    }
                                    keyboardType="phone-pad"
                                    // autoFocus={true}
                                    maxLength={9}
                                />
                            </View>

                            {/* Status input --------------------------------------------------------- */}
                            <View style={styles.pickerWrapper}>
                                <View style={styles.preTextWrapperStyle}>
                                    <Text style={styles.preText}>Holati</Text>
                                </View>
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={statusModalVisible}
                                    onRequestClose={() => {
                                        setStatusModalVisible(
                                            !statusModalVisible
                                        );
                                    }}
                                >
                                    <View style={styles.centeredView}>
                                        <View style={styles.modalWrapper}>
                                            <FlatList
                                                data={clientStatus}
                                                renderItem={modalStatus}
                                                keyExtractor={(item) =>
                                                    item.key
                                                }
                                                contentContainerStyle={
                                                    styles.modalView
                                                }
                                                style={styles.contenModalView}
                                                showsVerticalScrollIndicator={
                                                    false
                                                }
                                            />
                                        </View>
                                        <Pressable
                                            style={styles.buttonClose}
                                            onPress={() =>
                                                setStatusModalVisible(
                                                    !statusModalVisible
                                                )
                                            }
                                        >
                                            <Text
                                                style={styles.hideModalButton}
                                            >
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

                            {/* Second Phone Num input --------------------------------------------------------------- */}
                            <View style={styles.phoneTxtWrapper}>
                                <Text style={{ color: "black", fontSize: 16 }}>
                                    Mijoz haqida izoh
                                </Text>
                            </View>
                            <View
                                style={{
                                    ...styles.inputContainer,
                                    marginBottom: 16,
                                    flexDirection: "column",
                                }}
                                behavior={
                                    Platform.OS === "ios" ? "padding" : "height"
                                }
                            >
                                <TextInput
                                    style={styles.input}
                                    numberOfLines={1}
                                    placeholder="Izoh qoldiring"
                                    placeholderTextColor="#B8B8BB"
                                    onChangeText={(value) => (summary = value)}
                                    keyboardType="default"
                                    // autoFocus={true}
                                    maxLength={9}
                                />
                            </View>

                            {/* Age input ------------------------------------------------------------------- */}
                            {/* <View
                                style={styles.inputContainer}
                                behavior={
                                    Platform.OS === "ios" ? "padding" : "height"
                                }
                            >
                                <View style={styles.preTextWrapperStyle}>
                                    <Text style={styles.preText}>Age</Text>
                                </View>
                                <TextInput
                                    style={styles.input}
                                    numberOfLines={1}
                                    placeholder={`${multiSliderValue[0]}-${multiSliderValue[1]}`}
                                    placeholderTextColor="#B8B8BB"
                                    keyboardType="default"
                                    // autoFocus={true}
                                    maxLength={9}
                                />
                            </View> */}

                            {/* Slider ----------------------------------------------------------- */}
                            {/* <View style={sliderStyles.viewContainer}>
                                <View style={sliderStyles.sliderWrapper}>
                                    <View style={sliderStyles.labelWrapper}>
                                        <Text style={sliderStyles.labelText}>
                                            {multiSliderValue[0]}
                                        </Text>
                                        <MultiSlider
                                            markerStyle={{
                                                ...Platform.select({
                                                    ios: {
                                                        height: 20,
                                                        width: 20,
                                                        shadowColor: "#000000",
                                                        shadowOffset: {
                                                            width: 0,
                                                            height: 3,
                                                        },
                                                        shadowRadius: 1,
                                                        shadowOpacity: 0.1,
                                                    },
                                                    android: {
                                                        height: 20,
                                                        width: 20,
                                                        borderRadius: 50,
                                                        backgroundColor:
                                                            "#1792E8",
                                                    },
                                                }),
                                            }}
                                            pressedMarkerStyle={{
                                                ...Platform.select({
                                                    android: {
                                                        height: 30,
                                                        width: 30,
                                                        borderRadius: 20,
                                                        backgroundColor:
                                                            "#148ADC",
                                                    },
                                                }),
                                            }}
                                            selectedStyle={{
                                                backgroundColor: "#1792E8",
                                            }}
                                            trackStyle={{
                                                backgroundColor: "#CECECE",
                                            }}
                                            touchDimensions={{
                                                height: 20,
                                                width: 20,
                                                borderRadius: 10,
                                                slipDisplacement: 40,
                                            }}
                                            values={[
                                                multiSliderValue[0],
                                                multiSliderValue[1],
                                            ]}
                                            sliderLength={280}
                                            onValuesChange={
                                                multiSliderValuesChange
                                            }
                                            min={16}
                                            max={72}
                                            allowOverlap={false}
                                            minMarkerOverlapDistance={10}
                                        />
                                        <Text style={sliderStyles.labelText}>
                                            {multiSliderValue[1]}
                                        </Text>
                                    </View>
                                </View>
                            </View> */}

                            <View style={styles.phoneTxtWrapper}>
                                <Text style={styles.addressTxt}>
                                    Mijoz manzili:
                                </Text>
                            </View>

                            {/* State input ----------------------------------------------------------- */}
                            <View style={styles.pickerWrapper}>
                                <View style={styles.preTextWrapperStyle}>
                                    <Text style={styles.preText}>Viloyat</Text>
                                </View>
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={stateModalVisible}
                                    onRequestClose={() => {
                                        setStateModalVisible(
                                            !stateModalVisible
                                        );
                                    }}
                                >
                                    <View style={styles.centeredView}>
                                        <View style={styles.modalWrapper}>
                                            <FlatList
                                                data={states.states}
                                                renderItem={modalState}
                                                keyExtractor={(item) =>
                                                    item.stateId
                                                }
                                                contentContainerStyle={
                                                    styles.modalView
                                                }
                                                style={styles.contenModalView}
                                                showsVerticalScrollIndicator={
                                                    false
                                                }
                                            />
                                        </View>
                                        <Pressable
                                            style={[
                                                styles.button,
                                                styles.buttonClose,
                                            ]}
                                            onPress={() =>
                                                setStateModalVisible(
                                                    !stateModalVisible
                                                )
                                            }
                                        >
                                            <Text
                                                style={styles.hideModalButton}
                                            >
                                                Hide Modal
                                            </Text>
                                        </Pressable>
                                    </View>
                                </Modal>
                                <Pressable
                                    style={styles.buttonOpen}
                                    onPress={() => setStateModalVisible(true)}
                                >
                                    <Text style={styles.textStyle}>
                                        {selectedState != undefined
                                            ? selectedState.stateName
                                            : "Add State"}
                                    </Text>
                                </Pressable>
                            </View>

                            {/* Region input -------------------------------------------- */}
                            <View style={styles.pickerWrapper}>
                                <View style={styles.preTextWrapperStyle}>
                                    <Text style={styles.preText}>Shahar/Tuman</Text>
                                </View>
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={regionModalVisible}
                                    onRequestClose={() => {
                                        setRegionModalVisible(
                                            !regionModalVisible
                                        );
                                    }}
                                >
                                    <View style={styles.centeredView}>
                                        <View style={styles.modalWrapper}>
                                            <FlatList
                                                data={
                                                    regions != undefined
                                                        ? regions.regions
                                                        : []
                                                }
                                                renderItem={modalRegion}
                                                keyExtractor={(item) =>
                                                    item.regionId
                                                }
                                                contentContainerStyle={
                                                    styles.modalView
                                                }
                                                style={styles.contenModalView}
                                                showsVerticalScrollIndicator={
                                                    false
                                                }
                                            />
                                        </View>
                                        <Pressable
                                            style={[
                                                styles.button,
                                                styles.buttonClose,
                                            ]}
                                            onPress={() =>
                                                setRegionModalVisible(
                                                    !regionModalVisible
                                                )
                                            }
                                        >
                                            <Text
                                                style={styles.hideModalButton}
                                            >
                                                Hide Modal
                                            </Text>
                                        </Pressable>
                                    </View>
                                </Modal>
                                <Pressable
                                    style={styles.buttonOpen}
                                    onPress={() => setRegionModalVisible(true)}
                                >
                                    <Text style={styles.textStyle}>
                                        {selectedRegion != undefined
                                            ? selectedRegion.regionName
                                            : "Add Region"}
                                    </Text>
                                </Pressable>
                            </View>

                            {/* Gender input -------------------------------------------------------------- */}
                            {/* <View
                                style={{
                                    ...styles.pickerWrapper,
                                    marginBottom: 24,
                                }}
                            >
                                <View style={styles.preTextWrapperStyle}>
                                    <Text style={styles.preText}>Gender</Text>
                                </View>
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={genderModalVisible}
                                    onRequestClose={() => {
                                        setGenderModalVisible(
                                            !genderModalVisible
                                        );
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
                                                data={genderData}
                                                renderItem={modalGender}
                                                keyExtractor={(item) =>
                                                    item.key
                                                }
                                                contentContainerStyle={
                                                    styles.modalView
                                                }
                                                style={styles.contenModalView}
                                                showsVerticalScrollIndicator={
                                                    false
                                                }
                                            />
                                        </View>
                                        <Pressable
                                            style={[
                                                styles.button,
                                                styles.buttonClose,
                                            ]}
                                            onPress={() =>
                                                setGenderModalVisible(
                                                    !genderModalVisible
                                                )
                                            }
                                        >
                                            <Text
                                                style={styles.hideModalButton}
                                            >
                                                Hide Modal
                                            </Text>
                                        </Pressable>
                                    </View>
                                </Modal>
                                <Pressable
                                    style={styles.buttonOpen}
                                    onPress={() => setGenderModalVisible(true)}
                                >
                                    <Text style={styles.textStyle}>
                                        {selectedGender != undefined
                                            ? selectedGender.label
                                            : "Add Gender"}
                                    </Text>
                                </Pressable>
                            </View> */}
                        </View>

                        {/* Result box of staffs ------------------------------------------------------- */}

                    </ScrollView>
                    <TouchableOpacity
                        style={styles.fab}
                        onPress={() => navigation.goBack()}
                    >
                        <Feather name="arrow-left" size={28} color="white" />
                    </TouchableOpacity>
                </>
            )}
        </>
    );
};

export default AddClientScreen;
