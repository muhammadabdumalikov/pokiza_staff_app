import React, { useState, useEffect } from "react";
import {
    ScrollView,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Dimensions,
    Modal,
    ActivityIndicator,
    Pressable,
} from "react-native";
import Collapsible from "react-native-collapsible";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entypo, Ionicons, AntDesign, Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { request } from "../../../helpers/request";

const height = Dimensions.get("window").height;

const ModeratorsScreen = ({ navigation, route }) => {
    const [collapsed, setCollapsed] = useState(true);
    let [selectedTariffs, setSelectedTariffs] = useState("");
    const [selectedState, setSelectedState] = useState();
    let [isLoading, setLoading] = useState(true);
    const [stateModalVisible, setStateModalVisible] = useState(false);
    const [userToken, setUserToken] = useState();

    let [states, setStates] = useState();

    let firstname;
    let age;
    let index = 0;
    let genderIndex = 0;

    const GET_STATE_QUERY = `{
        states {
          stateId
          stateName
        }
      }`;

    const toggleExpanded = () => {
        setCollapsed(!collapsed);
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

    useEffect(() => {
        async function fetchData() {
            try {
                const value = await AsyncStorage.getItem("staff_token");
                setUserToken(value);
                // setClients(await request(ALL_CLIENTS_QUERY, null, value));
                setStates(await request(GET_STATE_QUERY, null, value));
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

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
                <View style={{ height: "100%" }}>
                    <TouchableOpacity
                        onPress={toggleExpanded}
                        style={styles.filterBox}
                    >
                        <Text style={styles.headerText}>Filter</Text>
                        {collapsed ? (
                            <Feather
                                name="chevron-down"
                                size={28}
                                color="black"
                            />
                        ) : (
                            <Feather
                                name="chevron-up"
                                size={28}
                                color="black"
                            />
                        )}
                        {/*Heading of Single Collapsible*/}
                    </TouchableOpacity>
                    <Collapsible
                        style={styles.hiddenContent}
                        collapsed={collapsed}
                        align="center"
                    >
                        <View style={styles.content}>
                            {/* Branch input ----------------------------------------------------------- */}
                            <View style={styles.pickerWrapper}>
                                <View style={styles.preTextWrapperStyle}>
                                    <Text style={styles.preText}>
                                        Filial bo'yicha
                                    </Text>
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
                                                Yopish
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
                                            : "Filialni tanlash"}
                                    </Text>
                                </Pressable>
                            </View>

                            {/* Branch input ----------------------------------------------------------- */}
                            <View style={styles.pickerWrapper}>
                                <View style={styles.preTextWrapperStyle}>
                                    <Text style={styles.preText}>
                                        Filial bo'yicha
                                    </Text>
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
                                                Yopish
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
                                            : "Tarifni tanlash"}
                                    </Text>
                                </Pressable>
                            </View>

                            {/* Reset Filter Button ------------------------------------------------ */}
                            <View style={styles.resetWrapper}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setSelectedTariffs("");
                                        setSelectedAddress("");
                                        setSelectedAlphabet("");
                                    }}
                                >
                                    <Text style={styles.resetText}>
                                        Filterni tozalash
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            {/* Hide Filter Button ------------------------------------------------------ */}
                            <View style={styles.hideButtonWrapper}>
                                <TouchableOpacity onPress={toggleExpanded}>
                                    <Feather
                                        name="chevron-up"
                                        size={28}
                                        color="black"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Collapsible>
                    {/* <FlatList
                        data={clients ? clients.clients : []}
                        keyExtractor={(item) => item.clientId}
                        renderItem={({ item }) => <CardComponent item={item} />}
                        style={styles.container}
                        contentContainerStyle={styles.contentStyle}
                        showsVerticalScrollIndicator={false}
                    /> */}
                        
                       
                    <TouchableOpacity
                        style={styles.fab}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons
                            name="ios-arrow-back"
                            size={28}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
            )}
        </>
    );
};

export default ModeratorsScreen;
