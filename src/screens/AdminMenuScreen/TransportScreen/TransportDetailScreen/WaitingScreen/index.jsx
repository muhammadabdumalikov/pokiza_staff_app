import React, { useContext, useState, useEffect } from "react";
import {
    ScrollView,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Pressable,
    Dimensions,
    Modal,
} from "react-native";
import { Entypo, Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import Collapsible from "react-native-collapsible";
import AsyncStorage from "@react-native-async-storage/async-storage";


import { styles } from "./styles";
import { AuthContext } from "../../../../../navigation/AuthProvider";

const height = Dimensions.get("window").height;
const elements = [];
const data = [];

const WaitingScreen = ({ navigation, route }) => {
    const { transportId } = useContext(AuthContext);
    const [userToken, setUserToken] = useState()
    const [branchModalVisible, setBranchModalVisible] = useState(false);
    const [branches, setBranches] = useState();
    const [mainCollapsed, setMainCollapsed] = useState(true);
    const [selectedBranch, setSelectedBranch] = useState();

    const [isLoading, setLoading] = useState(true);

    const GET_BRANCHES_QUERY = `query{
        branches{
          branchId
          branchName
        }
      }
    `;

    useEffect(() => {
        async function fetchData() {
            try {
                const value = await AsyncStorage.getItem("staff_token");
                setUserToken(value);
                setData(await request(QUERY, null, value));
                setBranches(await request(GET_BRANCHES_QUERY, null, value));
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const toggleMainExpanded = () => {
        setMainCollapsed(!mainCollapsed);
    };

    console.log(branches)
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

    return (
        <View style={{ height: "100%" }}>
            <TouchableOpacity
                onPress={toggleMainExpanded}
                style={styles.filterBox}
            >
                <View style={styles.filterIconWrapper}>
                    <AntDesign name="filter" size={22} color="black" />
                    <Text style={styles.headerText}>Filter</Text>
                </View>
                {elements.length > 0 ? (
                    <Text style={styles.filterItem1}>
                        Tanlandi: {`${elements.length}`}
                    </Text>
                ) : (
                    <></>
                )}
                {/* {data ? (
                    <Text
                        style={styles.filterItem2}
                    >{`${data.transports.length}`}</Text>
                ) : null} */}
            </TouchableOpacity>
            <Collapsible
                style={styles.hiddenContent}
                collapsed={mainCollapsed}
                align="center"
            >
                <View style={styles.content}>
                    {/* Branch input ----------------------------------------------------------- */}
                    <View style={styles.pickerWrapper}>
                        <View style={styles.preTextWrapperStyle}>
                            <Text style={styles.preText}>Filial bo'yicha</Text>
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
                                        data={branches ? branches.branches : []}
                                        renderItem={modalBranch}
                                        keyExtractor={(item) => item.branchId}
                                        contentContainerStyle={styles.modalView}
                                        style={styles.contenModalView}
                                        showsVerticalScrollIndicator={false}
                                    />
                                </View>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() =>
                                        setBranchModalVisible(
                                            !branchModalVisible
                                        )
                                    }
                                >
                                    <Text style={styles.hideModalButton}>
                                        Yopish
                                    </Text>
                                </Pressable>
                            </View>
                        </Modal>
                        <Pressable
                            style={styles.buttonOpen}
                            onPress={() => setBranchModalVisible(true)}
                        >
                            <Text style={styles.textStyle}>
                                {selectedBranch != undefined
                                    ? selectedBranch.branchName
                                    : "Filialni tanlash"}
                            </Text>
                        </Pressable>
                    </View>

                    {/* Reset Filter Button ------------------------------------------------ */}
                    <View style={styles.resetWrapper}>
                        <TouchableOpacity onPress={() => {}}>
                            <Text style={styles.resetText}>
                                Filterni tozalash
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {/* Hide Filter Button ------------------------------------------------------ */}
                    <View style={styles.hideButtonWrapper}>
                        <TouchableOpacity onPress={toggleMainExpanded}>
                            <Feather
                                name="chevron-up"
                                size={28}
                                color="black"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </Collapsible>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentStyle}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.resultBox}>
                    <View style={styles.resultName}>
                        <Text style={styles.resultNameText}>
                            {"Abdujalilov Abdulaziz"}
                        </Text>
                    </View>
                    <View style={styles.resultOrderId}>
                        <Text style={styles.resultOrderIdText}>
                            Order ID:{" "}
                            <Text style={styles.resultOrderIdDynamicText}>
                                #{"100174"}
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.resultAddress}>
                        <Text style={styles.resultAddressText}>Address: </Text>
                        <Text style={styles.resultAddressDynamicText}>
                            {
                                "Mirobod tumani, Rakat mahalla, Xosilot ko'chasi, 76-uy, 42-xonadon"
                            }
                        </Text>
                    </View>
                    <View style={styles.resultAddressLocation}>
                        <Entypo name="location-pin" size={24} color="#007AFF" />
                        <Text style={styles.resultAddressLocationDynamicText}>
                            {"Mirobod masjidi"}
                        </Text>
                    </View>
                    <View style={styles.resultPhoneNumbers}>
                        <Text style={styles.resultAddressText}>
                            Phone Numbers:
                        </Text>
                        <View>
                            <Text>{"+998911234567"}</Text>
                            <Text>{"+998911234567"}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.resultBox}>
                    <View style={styles.resultName}>
                        <Text style={styles.resultNameText}>
                            {"Abdujalilov Abdulaziz"}
                        </Text>
                    </View>
                    <View style={styles.resultOrderId}>
                        <Text style={styles.resultOrderIdText}>
                            Order ID:{" "}
                            <Text style={styles.resultOrderIdDynamicText}>
                                #{"100174"}
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.resultAddress}>
                        <Text style={styles.resultAddressText}>Address: </Text>
                        <Text style={styles.resultAddressDynamicText}>
                            {
                                "Mirobod tumani, Rakat mahalla, Xosilot ko'chasi, 76-uy, 42-xonadon"
                            }
                        </Text>
                    </View>
                    <View style={styles.resultAddressLocation}>
                        <Entypo name="location-pin" size={24} color="#007AFF" />
                        <Text style={styles.resultAddressLocationDynamicText}>
                            {"Mirobod masjidi"}
                        </Text>
                    </View>
                    <View style={styles.resultPhoneNumbers}>
                        <Text style={styles.resultAddressText}>
                            Phone Numbers:
                        </Text>
                        <View>
                            <Text>{"+998911234567"}</Text>
                            <Text>{"+998911234567"}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.resultBox}>
                    <View style={styles.resultName}>
                        <Text style={styles.resultNameText}>
                            {"Abdujalilov Abdulaziz"}
                        </Text>
                    </View>
                    <View style={styles.resultOrderId}>
                        <Text style={styles.resultOrderIdText}>
                            Order ID:{" "}
                            <Text style={styles.resultOrderIdDynamicText}>
                                #{"100174"}
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.resultAddress}>
                        <Text style={styles.resultAddressText}>Address: </Text>
                        <Text style={styles.resultAddressDynamicText}>
                            {
                                "Mirobod tumani, Rakat mahalla, Xosilot ko'chasi, 76-uy, 42-xonadon"
                            }
                        </Text>
                    </View>
                    <View style={styles.resultAddressLocation}>
                        <Entypo name="location-pin" size={24} color="#007AFF" />
                        <Text style={styles.resultAddressLocationDynamicText}>
                            {"Mirobod masjidi"}
                        </Text>
                    </View>
                    <View style={styles.resultPhoneNumbers}>
                        <Text style={styles.resultAddressText}>
                            Phone Numbers:
                        </Text>
                        <View>
                            <Text>{"+998911234567"}</Text>
                            <Text>{"+998911234567"}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.resultBox}>
                    <View style={styles.resultName}>
                        <Text style={styles.resultNameText}>
                            {"Abdujalilov Abdulaziz"}
                        </Text>
                    </View>
                    <View style={styles.resultOrderId}>
                        <Text style={styles.resultOrderIdText}>
                            Order ID:{" "}
                            <Text style={styles.resultOrderIdDynamicText}>
                                #{"100174"}
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.resultAddress}>
                        <Text style={styles.resultAddressText}>Address: </Text>
                        <Text style={styles.resultAddressDynamicText}>
                            {
                                "Mirobod tumani, Rakat mahalla, Xosilot ko'chasi, 76-uy, 42-xonadon"
                            }
                        </Text>
                    </View>
                    <View style={styles.resultAddressLocation}>
                        <Entypo name="location-pin" size={24} color="#007AFF" />
                        <Text style={styles.resultAddressLocationDynamicText}>
                            {"Mirobod masjidi"}
                        </Text>
                    </View>
                    <View style={styles.resultPhoneNumbers}>
                        <Text style={styles.resultAddressText}>
                            Phone Numbers:
                        </Text>
                        <View>
                            <Text>{"+998911234567"}</Text>
                            <Text>{"+998911234567"}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="ios-arrow-back" size={28} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default WaitingScreen;
