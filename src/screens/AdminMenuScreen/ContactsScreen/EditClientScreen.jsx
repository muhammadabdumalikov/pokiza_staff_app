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
    Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather } from "@expo/vector-icons";

import { request } from "../../../helpers/request";
import { styles, sliderStyles } from "./styles";
import { colors } from "../../../constants/color";

const height = Dimensions.get("window").height;

const EditClientScreen = ({ navigation, route }) => {
    const client = route.params.client;
    const GET_STATE_QUERY = `{
        states {
          stateId
          stateName
        }
      }
    `;

    const GET_REGION_QUERY = `
    query($stateId: ID!){
        regions(stateId: $stateId){
          regionId
          regionName
        }
      }
    `;

    const GET_AREAS_QUERY = `query($regionId: ID!){
        areas(regionId: $regionId){
          areaId
          areaName
        }
      }
    `;

    const GET_NEIGHBORHOOD_QUERY = `query($regionId: ID!){
        neighborhoods(regionId: $regionId){
          neighborhoodId
          neighborhoodName
        }
      }
    `;

    const GET_STREET_QUERY = `query($neighborhoodId: ID!){
        streets(neighborhoodId: $neighborhoodId ){
          streetId
          streetName
        }
      }
    `;

    const GET_BRANCHES_QUERY = `query($regionId: ID!){
        regions(regionId: $regionId){
          branch{
            branchId
            branchName
          }
        }
      }
    `;

    const ADD_ADDRESS_QUERY = `mutation($stateId:ID!,$regionId:ID!,$neighborhoodId: ID = null,$streetId:ID,$areaId:ID,$target:String,$homeNumber:Int){ 
        addAddress (stateId:$stateId,regionId:$regionId,neighborhoodId:$neighborhoodId,streetId:$streetId,areaId:$areaId,target:$target,homeNumber:$homeNumber){
          status
          message
          data
        }
      }
    `;

    const ADD_NEW_CLIENT = `mutation($firstName: String!,$lastName: String,$mainContact:String!,$secondContact:String,$age:Int!,$gender:Int!,$branchId:ID!,$addressId:ID!){
        adminRegisterClient(firstName: $firstName, lastName:$lastName,mainContact:$mainContact,secondContact:$secondContact,age:$age,gender:$gender,branchId:$branchId,addressId:$addressId){
          status
          message
          data
        }
      }`;

    const [selectedFirstName, setSelectedFirstName] = useState();
    const [selectedLastName, setSelectedLastName] = useState();
    const [selectedMainContact, setSelectedMainContact] = useState();
    const [selectedSecondContact, setSelectedSecondContact] = useState();

    const [selectedState, setSelectedState] = useState();
    const [selectedRegion, setSelectedRegion] = useState();
    const [selectedArea, setSelectedArea] = useState();
    const [selectedNeighborhood, setSelectedNeighborhood] = useState();
    const [selectedStreet, setSelectedStreet] = useState();
    const [selectedBranch, setSelectedBranch] = useState();
    const [selectedAge, setSelectedAge] = useState();
    const [selectedStatus, setSelectedStatus] = useState();
    const [selectedGender, setSelectedGender] = useState();
    const [selectedHomeNumber, setSelectedHomeNumber] = useState();
    const [isLoading, setLoading] = useState(true);
    const [userToken, setUserToken] = useState();
    const [collapsed, setCollapsed] = useState(true);

    let [states, setStates] = useState();
    let [branches, setBranches] = useState();
    let [regions, setRegions] = useState();
    let [areas, setAreas] = useState();
    let [neighborhoods, setNeighborhoods] = useState();
    let [streets, setStreets] = useState();

    const [stateModalVisible, setStateModalVisible] = useState(false);
    const [regionModalVisible, setRegionModalVisible] = useState(false);
    const [areaModalVisible, setAreaModalVisible] = useState(false);
    const [neighborhoodModalVisible, setNeighborhoodModalVisible] =
        useState(false);
    const [streetModalVisible, setStreetModalVisible] = useState(false);
    const [branchModalVisible, setBranchModalVisible] = useState(false);

    const [statusModalVisible, setStatusModalVisible] = useState(false);
    const [genderModalVisible, setGenderModalVisible] = useState(false);

    const [deleteModalVisible, setDeleteModalVisible] = useState(false);

    const [clientSummary, setClientSummary] = useState();
    const [locationSummary, setLocationSummary] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const value = await AsyncStorage.getItem("staff_token");
                setUserToken(value);
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
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [selectedState]);

    useEffect(() => {
        async function fetchData() {
            try {
                const areasData = await request(
                    GET_AREAS_QUERY,
                    { regionId: selectedRegion.regionId },
                    userToken
                );
                const uniqueAddresses = Array.from(
                    new Set(areasData.areas.map((a) => a.areaId))
                ).map((id) => {
                    return areasData.areas.find((a) => a.areaId === id);
                });

                setAreas({ areas: uniqueAddresses });
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [selectedRegion]);

    useEffect(() => {
        async function fetchNeighborhood() {
            try {
                setNeighborhoods(
                    await request(
                        GET_NEIGHBORHOOD_QUERY,
                        { regionId: selectedRegion },
                        userToken
                    )
                );
            } catch (error) {
                console.log(error);
            }
        }
        fetchNeighborhood();
    }, [selectedRegion]);

    useEffect(() => {
        async function fetchStreet() {
            try {
                const streetsData = await request(
                    GET_STREET_QUERY,
                    { neighborhoodId: selectedNeighborhood },
                    userToken
                );
                const uniqueAddresses = Array.from(
                    new Set(streetsData.streets.map((a) => a.streetId))
                ).map((id) => {
                    return streetsData.streets.find((a) => a.streetId === id);
                });
                setStreets({ streets: uniqueAddresses });
            } catch (error) {
                console.log(error);
            }
        }
        fetchStreet();
    }, [selectedNeighborhood]);

    useEffect(() => {
        async function fetchBranches() {
            try {
                setBranches(
                    await request(
                        GET_BRANCHES_QUERY,
                        { regionId: selectedRegion },
                        userToken
                    )
                );
            } catch (error) {
                console.log(error);
            }
        }
        fetchBranches();
    }, [selectedRegion]);

    const toggleExpanded = () => {
        setCollapsed(!collapsed);
    };

    const genderData = [
        { key: "1", label: "Male", value: 1 },
        { key: "2", label: "Female", value: 2 },
    ];

    const clientStatus = [
        { key: "1", label: "Normal", value: 1 },
        { key: "2", label: "Good", value: 2 },
        { key: "3", label: "Favourites", value: 3 },
        // etc...
        // Can also add additional custom keys which are passed to the onChange callback
        { key: "4", label: "Black-list", value: 4 },
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
    const modalArea = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ width: "80%", paddingVertical: 15 }}
                onPress={() => {
                    setSelectedArea(item);
                    setAreaModalVisible(!areaModalVisible);
                }}
            >
                <Text style={{ flex: 1, fontSize: 15, color: "#2196F3" }}>
                    {item.areaName}
                </Text>
            </TouchableOpacity>
        );
    };

    const modalNeighborhood = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ width: "80%", paddingVertical: 15 }}
                onPress={() => {
                    setSelectedNeighborhood(item);
                    setNeighborhoodModalVisible(!neighborhoodModalVisible);
                }}
            >
                <Text style={{ flex: 1, fontSize: 15, color: "#2196F3" }}>
                    {item.neighborhoodName}
                </Text>
            </TouchableOpacity>
        );
    };

    const modalStreet = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ width: "80%", paddingVertical: 15 }}
                onPress={() => {
                    setSelectedStreet(item);
                    setStreetModalVisible(!streetModalVisible);
                }}
            >
                <Text style={{ flex: 1, fontSize: 15, color: "#2196F3" }}>
                    {item.streetName}
                </Text>
            </TouchableOpacity>
        );
    };

    const modalBranch = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ width: "80%", paddingVertical: 15 }}
                onPress={() => {
                    setSelectedBranch(item);
                    setBranchModalVisible(!branchModalVisible);
                }}
            >
                <Text style={{ flex: 1, fontSize: 15, color: "#2196F3" }}>
                    {item.branchName}
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

    const onSuccess = () => {
        Alert.alert("Raqam muvaffaqiyatli qo'shildi", "", [
            {
                text: "Ok",
                onPress: () => navigation.goBack(),
                style: "cancel",
            },
        ]);
    };

    const onError = () => {
        Alert.alert("Bu raqam band qilingan!", "", [
            {
                text: "Qaytish",
                onPress: () => null,
                style: "cancel",
            },
        ]);
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
                    <View style={sliderStyles.labelWrapper}>
                        <Text style={sliderStyles.labelText}>
                            Mijoz - @ {client.clientId}
                        </Text>
                        <TouchableOpacity
                            onPress={() => setDeleteModalVisible(true)}
                        >
                            <Feather
                                name="trash-2"
                                size={24}
                                color={colors.red}
                            />
                        </TouchableOpacity>
                        <Modal
                            transparent={true}
                            animationType="slide"
                            visible={deleteModalVisible}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.deleteModalWrapper}>
                                    <View style={styles.deleteModalContent}>
                                        <Text style={styles.deleteModalText}>
                                            Mijozni o'chirishni xohlaysizmi?
                                        </Text>
                                        <View style={styles.deleteModalBtns}>
                                            <TouchableOpacity
                                                style={styles.cancelModalBtn}
                                                onPress={() => setDeleteModalVisible(false)}
                                            >
                                                <Text
                                                    style={
                                                        styles.cancelModalBtn
                                                    }
                                                >
                                                    Yo'q
                                                </Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={styles.deleteModalBtn}
                                            >
                                                <Text
                                                    style={styles.deleteModalBtn}
                                                >
                                                    Ha, xohlayman
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </View>
                    <Text style={sliderStyles.labelTxt}>
                        Ma'lumotlarni tahrirlash:
                    </Text>
                    <ScrollView
                        style={styles.container}
                        contentContainerStyle={styles.contentStyle}
                        showsVerticalScrollIndicator={false}
                    >
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
                                <Text style={styles.preText}>*Ism</Text>
                            </View>
                            <TextInput
                                style={styles.input}
                                numberOfLines={1}
                                placeholder="Ism kiriting"
                                placeholderTextColor="#B8B8BB"
                                onChangeText={(value) =>
                                    setSelectedFirstName(value)
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
                                onChangeText={(value) =>
                                    setSelectedLastName(value)
                                }
                                keyboardType="default"
                                // autoFocus={true}
                                maxLength={9}
                            />
                        </View>

                        {/* First Phone Num input --------------------------------------------------------------- */}
                        <View style={styles.phoneTxtWrapper}>
                            <Text style={styles.phoneTxt}>
                                * 1 - Telefon raqam:
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
                                    setSelectedMainContact(value)
                                }
                                keyboardType="phone-pad"
                                // autoFocus={true}
                                maxLength={12}
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
                                    setSelectedSecondContact(value)
                                }
                                keyboardType="phone-pad"
                                // autoFocus={true}
                                maxLength={12}
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
                                    setStatusModalVisible(!statusModalVisible);
                                }}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalWrapper}>
                                        <FlatList
                                            data={clientStatus}
                                            renderItem={modalStatus}
                                            keyExtractor={(item) => item.key}
                                            contentContainerStyle={
                                                styles.modalView
                                            }
                                            style={styles.contenModalView}
                                            showsVerticalScrollIndicator={false}
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
                                        : "Holatni kiriting"}
                                </Text>
                            </Pressable>
                        </View>

                        {/* Client comment input --------------------------------------------------------------- */}
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
                                onChangeText={(value) =>
                                    setClientSummary(value)
                                }
                                keyboardType="default"
                                // autoFocus={true}
                                maxLength={9}
                            />
                        </View>

                        {/* Age and Gender input ------------------------------------------------------------------- */}
                        <View
                            style={{
                                width: "100%",
                                height: height / 15,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                            behavior={
                                Platform.OS === "ios" ? "padding" : "height"
                            }
                        >
                            {/* Age input ------------------------------------------------------------------- */}

                            <View
                                style={{
                                    ...styles.inputContainer,
                                    width: "48%",
                                }}
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
                                    placeholder="27"
                                    placeholderTextColor="#B8B8BB"
                                    keyboardType="numeric"
                                    onChangeText={(value) =>
                                        setSelectedAge(value)
                                    }
                                    // autoFocus={true}
                                    maxLength={9}
                                />
                            </View>
                            {/* Gender input -------------------------------------------------------------- */}
                            <View
                                style={{
                                    ...styles.pickerWrapper,
                                    marginBottom: 0,
                                    width: "48%",
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
                                            : "Jinsni kiriting"}
                                    </Text>
                                </Pressable>
                            </View>
                        </View>

                        <View style={styles.phoneTxtWrapper}>
                            <Text style={styles.addressTxt}>
                                Mijoz manzili:
                            </Text>
                        </View>

                        {/* State input ----------------------------------------------------------- */}
                        <View style={styles.pickerWrapper}>
                            <View style={styles.preTextWrapperStyle}>
                                <Text style={styles.preText}>*Viloyat</Text>
                            </View>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={stateModalVisible}
                                onRequestClose={() => {
                                    setStateModalVisible(!stateModalVisible);
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
                                            showsVerticalScrollIndicator={false}
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
                                        <Text style={styles.hideModalButton}>
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
                                        : "Viloyatni"}
                                </Text>
                            </Pressable>
                        </View>

                        {/* Region input -------------------------------------------- */}
                        <View style={styles.pickerWrapper}>
                            <View style={styles.preTextWrapperStyle}>
                                <Text style={styles.preText}>
                                    *Shahar/Tuman
                                </Text>
                            </View>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={regionModalVisible}
                                onRequestClose={() => {
                                    setRegionModalVisible(!regionModalVisible);
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
                                            showsVerticalScrollIndicator={false}
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
                                        <Text style={styles.hideModalButton}>
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
                                        : "Tumanni kiriting"}
                                </Text>
                            </Pressable>
                        </View>

                        {/* Area input -------------------------------------------- */}
                        <View style={styles.pickerWrapper}>
                            <View style={styles.preTextWrapperStyle}>
                                <Text style={styles.preText}>Mo'ljal</Text>
                            </View>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={areaModalVisible}
                                onRequestClose={() => {
                                    setAreaModalVisible(!areaModalVisible);
                                }}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalWrapper}>
                                        <FlatList
                                            data={
                                                areas != undefined
                                                    ? areas.areas
                                                    : []
                                            }
                                            renderItem={modalArea}
                                            keyExtractor={(item) => item.areaId}
                                            contentContainerStyle={
                                                styles.modalView
                                            }
                                            style={styles.contenModalView}
                                            showsVerticalScrollIndicator={false}
                                        />
                                    </View>
                                    <Pressable
                                        style={[
                                            styles.button,
                                            styles.buttonClose,
                                        ]}
                                        onPress={() =>
                                            setAreaModalVisible(
                                                !areaModalVisible
                                            )
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
                                onPress={() => setAreaModalVisible(true)}
                            >
                                <Text style={styles.textStyle}>
                                    {selectedArea != undefined
                                        ? selectedArea.areaName
                                        : "Hudud kiriting"}
                                </Text>
                            </Pressable>
                        </View>

                        {/* Neighborhood input -------------------------------------------- */}
                        <View style={styles.pickerWrapper}>
                            <View style={styles.preTextWrapperStyle}>
                                <Text style={styles.preText}>
                                    Mahalla/Qishloq
                                </Text>
                            </View>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={neighborhoodModalVisible}
                                onRequestClose={() => {
                                    setNeighborhoodModalVisible(
                                        !neighborhoodModalVisible
                                    );
                                }}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalWrapper}>
                                        <FlatList
                                            data={
                                                neighborhoods != undefined
                                                    ? neighborhoods.neighborhoods
                                                    : []
                                            }
                                            renderItem={modalNeighborhood}
                                            keyExtractor={(item) =>
                                                item.neighborhoodId
                                            }
                                            contentContainerStyle={
                                                styles.modalView
                                            }
                                            style={styles.contenModalView}
                                            showsVerticalScrollIndicator={false}
                                        />
                                    </View>
                                    <Pressable
                                        style={[
                                            styles.button,
                                            styles.buttonClose,
                                        ]}
                                        onPress={() =>
                                            setNeighborhoodModalVisible(
                                                !neighborhoodModalVisible
                                            )
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
                                onPress={() =>
                                    setNeighborhoodModalVisible(true)
                                }
                            >
                                <Text style={styles.textStyle}>
                                    {selectedNeighborhood != undefined
                                        ? selectedNeighborhood.neighborhoodName
                                        : "Mahallani kiriting"}
                                </Text>
                            </Pressable>
                        </View>

                        {/* Street input -------------------------------------------- */}
                        <View style={styles.pickerWrapper}>
                            <View style={styles.preTextWrapperStyle}>
                                <Text style={styles.preText}>Ko'cha</Text>
                            </View>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={streetModalVisible}
                                onRequestClose={() => {
                                    setStreetModalVisible(!streetModalVisible);
                                }}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalWrapper}>
                                        <FlatList
                                            data={
                                                streets != undefined
                                                    ? streets.streets
                                                    : []
                                            }
                                            renderItem={modalStreet}
                                            keyExtractor={(item) =>
                                                item.streetId
                                            }
                                            contentContainerStyle={
                                                styles.modalView
                                            }
                                            style={styles.contenModalView}
                                            showsVerticalScrollIndicator={false}
                                        />
                                    </View>
                                    <Pressable
                                        style={[
                                            styles.button,
                                            styles.buttonClose,
                                        ]}
                                        onPress={() =>
                                            setStreetModalVisible(
                                                !streetModalVisible
                                            )
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
                                onPress={() => setStreetModalVisible(true)}
                            >
                                <Text style={styles.textStyle}>
                                    {selectedStreet != undefined
                                        ? selectedStreet.streetName
                                        : "Ko'chani kiriting"}
                                </Text>
                            </Pressable>
                        </View>

                        {/* Home Number input --------------------------------------------------------------- */}
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
                                <Text style={styles.preText}>Uy raqami</Text>
                            </View>
                            <TextInput
                                style={styles.input}
                                numberOfLines={1}
                                placeholder="Uy raqamini kiriting"
                                placeholderTextColor="#B8B8BB"
                                onChangeText={(value) =>
                                    setSelectedHomeNumber(value)
                                }
                                keyboardType="default"
                                // autoFocus={true}
                                maxLength={9}
                            />
                        </View>

                        {/* Branch input -------------------------------------------- */}
                        <View style={styles.pickerWrapper}>
                            <View style={styles.preTextWrapperStyle}>
                                <Text style={styles.preText}>Filial</Text>
                            </View>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={branchModalVisible}
                                onRequestClose={() => {
                                    setBranchModalVisible(!branchModalVisible);
                                }}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalWrapper}>
                                        <FlatList
                                            data={
                                                branches != undefined
                                                    ? branches.branches
                                                    : []
                                            }
                                            renderItem={modalBranch}
                                            keyExtractor={(item) =>
                                                item.branchId
                                            }
                                            contentContainerStyle={
                                                styles.modalView
                                            }
                                            style={styles.contenModalView}
                                            showsVerticalScrollIndicator={false}
                                        />
                                    </View>
                                    <Pressable
                                        style={[
                                            styles.button,
                                            styles.buttonClose,
                                        ]}
                                        onPress={() =>
                                            setBranchModalVisible(
                                                !branchModalVisible
                                            )
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
                                onPress={() => setBranchModalVisible(true)}
                                disabled={true}
                            >
                                <Text style={styles.textStyle}>
                                    {selectedBranch != undefined
                                        ? selectedBranch.branchName
                                        : "Filialni kiriting"}
                                </Text>
                            </Pressable>
                        </View>

                        {/* Address comment input --------------------------------------------------------------- */}
                        <View style={styles.phoneTxtWrapper}>
                            <Text style={{ color: "black", fontSize: 16 }}>
                                Manzil haqida izoh qoldirish
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
                                onChangeText={(value) =>
                                    setLocationSummary(value)
                                }
                                keyboardType="default"
                                // autoFocus={true}
                                maxLength={9}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={async () => {
                                let addressID = await request(
                                    ADD_ADDRESS_QUERY,
                                    {
                                        stateId: selectedState.stateId,
                                        regionId: selectedRegion.regionId,
                                        neighborhoodId: selectedNeighborhood
                                            ? selectedNeighborhood
                                            : null,
                                        streetId: selectedStreet
                                            ? selectedStreet
                                            : null,
                                        areaId: selectedArea
                                            ? selectedArea
                                            : null,
                                        target: locationSummary
                                            ? locationSummary
                                            : null,
                                        homeNumber: selectedHomeNumber
                                            ? selectedHomeNumber
                                            : null,
                                    },
                                    userToken
                                );

                                setSelectedBranch(
                                    await request(
                                        GET_BRANCHES_QUERY,
                                        { regionId: selectedRegion.regionId },
                                        userToken
                                    )
                                );
                                console.log(selectedBranch);
                                let addClientAdmin = await request(
                                    ADD_NEW_CLIENT,
                                    {
                                        firstName: selectedFirstName,
                                        lastName: selectedLastName,
                                        mainContact: selectedMainContact,
                                        secondContact: selectedSecondContact
                                            ? selectedSecondContact
                                            : null,
                                        age: parseInt(selectedAge),
                                        gender: selectedGender.value,
                                        branchId:
                                            selectedBranch.regions[0].branch
                                                .branchId,
                                        addressId:
                                            addressID.addAddress.data
                                                .address_id,
                                    },
                                    userToken
                                );
                                if (
                                    addClientAdmin.adminRegisterClient.status ==
                                    200
                                ) {
                                    onSuccess();
                                } else {
                                    onError();
                                }
                            }}
                            style={styles.confirmBtnWrapper}
                        >
                            <Text style={styles.confirmBtnText}>
                                Tasdiqlash
                            </Text>
                        </TouchableOpacity>
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

export default EditClientScreen;
