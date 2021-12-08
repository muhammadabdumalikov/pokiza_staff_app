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
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Collapsible from "react-native-collapsible";
import ModalSelector from "react-native-modal-selector";
import { Feather } from "@expo/vector-icons";

import { request } from "../../../helpers/request";
import { sliderStyles, styles } from "./styles";
import CardComponent from "./CardComponent";

const ContactsScreen = ({ navigation, route }) => {
    const ALL_CLIENTS_QUERY = `query($clientStatus: Int = null, $branchId: ID = null, $pagination: Pagination){
        clients(clientStatus: $clientStatus, branchId: $branchId, pagination: $pagination){
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

    const [loadMore, setLoadMore] = useState(false);
    const [pageCurrent, setPageCurrent] = useState(1);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoadMore(true);
                const value = await AsyncStorage.getItem("staff_token");
                setUserToken(value);
                const clients  = await request(
                    ALL_CLIENTS_QUERY,
                    {
                        clientStatus: null,
                        branchId: null,
                        pagination: { limit: 5, page: 1 },
                    },
                    value
                );
                setClients(clients);
                setBranches(await request(GET_ALL_BRANCHES_QUERY, null, value));
                setLoading(false);
                setLoadMore(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoadMore(true);
                let loadMoreData = await request(
                    ALL_CLIENTS_QUERY,
                    {
                        clientStatus: null,
                        branchId: null,
                        pagination: { limit: 5, page: pageCurrent },
                    },
                    userToken
                );
                console.log(loadMoreData)

                // setClients({clients: [...clients, ...loadMoreData.clients]});
                console.log(clients)
                setLoadMore(false);
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
                setClients(
                    await request(
                        ALL_CLIENTS_QUERY,
                        { branchId: selectedBranch?.branchId },
                        userToken
                    )
                );
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
                setClients(
                    await request(
                        ALL_CLIENTS_QUERY,
                        { clientStatus: selectedStatus?.value },
                        userToken
                    )
                );
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
                    // let searchedDataId = await clients.clients.filter(
                    //     (item) => item.clientId == searchKey
                    // );
                    // let searchedDataMC = await clients.clients.filter(
                    //     (item) => item.clientInfo.mainContact == searchKey
                    // );
                    // let searchedDataSC = await clients.clients.filter(
                    //     (item) => item.clientInfo.secondContact == searchKey
                    // );
                    let searchedDataFN = await clients.clients.filter(
                        (item) => item.clientInfo.firstName == searchKey
                    );
                    let searchedDataLN = await clients.clients.filter(
                        (item) => item.clientInfo.lastName == searchKey
                    );
                    let searchedData = [...searchedDataFN, ...searchedDataLN];
                    console.log(searchedData);
                    setClients({ clients: searchedData });
                }
                // if (searchKey && !(selectedStatus && selectedBranch)) {
                //     setLoading(true);
                //     setClients(
                //         await request(
                //             SEARCH_CLIENT,
                //             { searchKey: searchKey },
                //             userToken
                //         )
                //     );
                //     setCanFilter(false);
                //     setLoading(false);
                // } else {
                //     setLoading(true);
                //     setClients(
                //         await request(ALL_CLIENTS_QUERY, null, userToken)
                //     );
                //     setCanFilter(true);
                //     setLoading(false);
                // }
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

    const renderFooter = () => {
        return loadMore ? (
            <View style={styles.loader}>
                <ActivityIndicator size="large" />
            </View>
        ) : null;
    };

    const handleLoadMore = () => {
        setTimeout(() => {
            setPageCurrent(pageCurrent + 1);
            setLoadMore(true);
        }, 1000);
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

                    <FlatList
                        data={clients? clients.clients : []}
                        keyExtractor={(item) => item.clientId}
                        renderItem={({ item }) => <CardComponent item={item} />}
                        style={styles.container}
                        contentContainerStyle={styles.contentStyle}
                        showsVerticalScrollIndicator={false}
                        ListFooterComponent={renderFooter}
                        onEndReached={handleLoadMore}
                        onEndReachedThreshold={0}
                    />
                    {/* Result box of staffs ------------------------------------------------------- */}

                    {/* // Custom component */}
                    {/* <ModalSelector
                    data={data}
                    ref={(selector) => {
                        this.selector = selector;
                    }}
                    customSelector={
                        <Switch onValueChange={() => this.selector.open()} />
                    }
                /> */}
                    <TouchableOpacity
                        style={styles.fab}
                        onPress={() => navigation.goBack()}
                    >
                        <Feather name="arrow-left" size={28} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.fab2}
                        onPress={() => navigation.navigate("AddClientScreen")}
                    >
                        <Feather name="user-plus" size={28} color="white" />
                    </TouchableOpacity>
                </View>
            )}
        </>
    );
};

export default ContactsScreen;
