import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
    Modal,
    Pressable,
    FlatList,
    Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Collapsible from "react-native-collapsible";
import { Feather, AntDesign } from "@expo/vector-icons";

import { request } from "../../../helpers/request";
import { sliderStyles, styles } from "./styles";
import CardComponent from "./CardComponent";
import { colors } from "../../../constants/color";

let stopFetchMore = true;

const ContactsScreen = ({ navigation, route }) => {
    const ALL_CLIENTS_QUERY = `query($clientStatus: Int, $branchId: ID, $pagination: Pagination){
        clients(clientStatus: $clientStatus, branchId: $branchId, pagination: $pagination){
          clientId
          clientStatus
          clientSummary
          clientInfo{
            address{
               state{
                stateName
              }
              region{
                regionName
              }
              neighborhood{
                neighborhoodName
              }
              street{
                streetName
              }
              area{
                areaName
              }
              homeNumber
              target
            }
            userId
            firstName
            lastName
            mainContact
            secondContact 
            age
            gender
          }
        }
      }
    `;

    const GET_ALL_BRANCHES_QUERY = `query($branchId:ID){
        branches(branchId: $branchId){
          branchId
          branchName
        }
      }
    `;

    const SEARCH_CLIENT = `query($searchKey: String!) {
        clients: search(searchKey: $searchKey) {
          ... on Client {
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
        }
      }      
    `;
    const [clients, setClients] = useState();
    const [branches, setBranches] = useState();
    const [selectedBranch, setSelectedBranch] = useState();
    const [isLoading, setLoading] = useState(true);
    const [collapsed, setCollapsed] = useState(true);
    const [selectedStatus, setSelectedStatus] = useState();
    const [userToken, setUserToken] = useState();

    const [canFilter, setCanFilter] = useState(true);

    const [statusModalVisible, setStatusModalVisible] = useState(false);
    const [branchModalVisible, setBranchModalVisible] = useState(false);

    const [searchBtnVisible, setSearchBtnVisible] = useState(false);
    const [searchKey, setSearchKey] = useState();

    const [pageCurrent, setPageCurrent] = useState(1);

    const [state, setState] = useState({
        data: [],
        page: pageCurrent,
    });

    const [searchedData, setSearchedData] = useState();
    const [searched, setSearched] = useState(false);
    const [elements, setElements] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const value = await AsyncStorage.getItem("staff_token");
                setUserToken(value);
                const clients = await request(
                    ALL_CLIENTS_QUERY,
                    {
                        clientStatus: null,
                        branchId: null,
                        pagination: { limit: 10, page: pageCurrent },
                    },
                    value
                );
                setState({
                    data: clients ? clients.clients : [],
                    page: pageCurrent,
                });
                setBranches(await request(GET_ALL_BRANCHES_QUERY, null, value));
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            try {
                let loadMoreData = await request(
                    ALL_CLIENTS_QUERY,
                    {
                        clientStatus: null,
                        branchId: null,
                        pagination: { limit: 10, page: pageCurrent },
                    },
                    userToken
                );
                setState({
                    data: state.data.concat(
                        loadMoreData ? loadMoreData.clients : []
                    ),
                    page: pageCurrent,
                });
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [pageCurrent]);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);

                let clients = await request(
                    ALL_CLIENTS_QUERY,
                    { branchId: selectedBranch?.branchId },
                    userToken
                );

                setState({
                    data: clients ? clients.clients : [],
                });
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [selectedBranch]);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                let clients = await request(
                    ALL_CLIENTS_QUERY,
                    { clientStatus: selectedStatus?.value },
                    userToken
                );
                setState({
                    data: clients ? clients.clients : [],
                });
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [selectedStatus]);

    useEffect(() => {
        async function fetchData() {
            try {
                if (selectedStatus || selectedBranch) {
                    let searchedDataFN = state.data.filter(
                        (item) => item.clientInfo.firstName == searchKey
                    );
                    let searchedDataLN = state.data.filter(
                        (item) => item.clientInfo.lastName == searchKey
                    );
                    let searchedData = [...searchedDataFN, ...searchedDataLN];
                    console.log(searchedData);
                    // setState({ data: searchedData });
                    setSearchedData({ data: searchedData });

                    setSearched(true);
                }
                if (searchKey && !(selectedStatus && selectedBranch)) {
                    setLoading(true);

                    let clients = await request(
                        SEARCH_CLIENT,
                        { searchKey: searchKey },
                        userToken
                    );
                    console.log(clients);
                    setState({
                        data: clients ? clients.clients : [],
                    });
                    setCanFilter(false);
                    setLoading(false);
                } else {
                    setLoading(true);
                    setClients(
                        await request(ALL_CLIENTS_QUERY, null, userToken)
                    );
                    setCanFilter(true);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [searchKey]);

    const toggleExpanded = () => {
        if (canFilter) setCollapsed(!collapsed);
    };

    const clientStatus = [
        { key: "1", label: "Normal", value: 1 },
        { key: "2", label: "Good", value: 2 },
        { key: "3", label: "Favourites", value: 3 },
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

    const RenderFooterComponent = () => {
        return stopFetchMore ? (
            <View style={styles.loader}>
                <ActivityIndicator size="large" />
            </View>
        ) : null;
    };

    let handleLoadMore = () => {
        if (!searchKey) setPageCurrent(pageCurrent + 1);
    };
    console.log(elements);
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
                    <View style={styles.searchBoxWrapper}>
                        <View style={styles.searchBox}>
                            <Feather
                                name="search"
                                size={18}
                                color="black"
                                style={{ marginRight: 5 }}
                            />
                            <TextInput
                                placeholder="Mijozlar ma'lumotlarini qidirish"
                                onFocus={() => setSearchBtnVisible(true)}
                                onSubmitEditing={(value) =>
                                    setSearchKey(value.nativeEvent.text)
                                }
                            />
                        </View>
                        {searchBtnVisible ? (
                            <TouchableOpacity
                                style={styles.searchBtn}
                                onPress={() => setSearchBtnVisible(false)}
                            >
                                <Feather
                                    name="x-circle"
                                    size={18}
                                    color="black"
                                />
                            </TouchableOpacity>
                        ) : null}
                    </View>
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
                                                Yopish
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
                                            : "Statusni kiriting"}
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
                                    visible={branchModalVisible}
                                    onRequestClose={() => {
                                        setBranchModalVisible(
                                            !branchModalVisible
                                        );
                                    }}
                                >
                                    <View style={styles.centeredView}>
                                        <View style={styles.modalWrapper}>
                                            <FlatList
                                                data={
                                                    branches
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
                                                setBranchModalVisible(
                                                    !branchModalVisible
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
                                    onPress={() => setBranchModalVisible(true)}
                                >
                                    <Text style={styles.textStyle}>
                                        {selectedBranch != undefined
                                            ? selectedBranch.branchName
                                            : "Filialni kiriting"}
                                    </Text>
                                </Pressable>
                            </View>

                            {/* Reset Filter Button ------------------------------------------------ */}
                            <View style={styles.resetWrapper}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setSelectedStatus(null);
                                        setSelectedBranch(null);
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
                    {!state ? (
                        <View style={{ flex: 1 }}>
                            <ActivityIndicator
                                size="large"
                                color={colors.blue}
                            />
                        </View>
                    ) : (
                        <FlatList
                            data={searched ? searchedData.data : state.data}
                            keyExtractor={(item) => item.clientId}
                            renderItem={({ item }) => (
                                <CardComponent
                                    item={item}
                                    elements={elements}
                                    setElements={setElements}
                                />
                            )}
                            style={styles.container}
                            contentContainerStyle={styles.contentStyle}
                            showsVerticalScrollIndicator={false}
                            ListFooterComponent={() => (
                                <RenderFooterComponent />
                            )}
                            onEndReached={handleLoadMore}
                            onEndReachedThreshold={0.5}
                        />
                    )}
                    <TouchableOpacity
                        style={styles.fab}
                        onPress={() => navigation.goBack()}
                    >
                        <Feather name="arrow-left" size={28} color="white" />
                    </TouchableOpacity>
                    {elements.length > 0 ? (
                        <TouchableOpacity style={styles.fab3}>
                            <Feather
                                name="trash-2"
                                size={28}
                                color={colors.red}
                            />
                            <Text style={styles.onSelectDel}>O'chirish</Text>
                        </TouchableOpacity>
                    ) : null}
                    {elements.length > 0 ? (
                        <TouchableOpacity
                            style={styles.fab4}
                            onPress={() => null}
                        >
                            <Feather
                                name="bell"
                                size={24}
                                color={colors.blue}
                            />
                            <Text style={styles.onSelectNot}>Xabar</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            style={styles.fab2}
                            onPress={() =>
                                navigation.navigate("AddClientScreen")
                            }
                        >
                            <Feather name="user-plus" size={28} color="white" />
                        </TouchableOpacity>
                    )}
                </View>
            )}
        </>
    );
};

export default ContactsScreen;
