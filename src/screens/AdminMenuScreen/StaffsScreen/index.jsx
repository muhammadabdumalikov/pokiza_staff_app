import React, { useContext, useEffect, useState } from "react";
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    FlatList,
    Pressable,
} from "react-native";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import Collapsible from "react-native-collapsible";

import { styles } from "./styles";
import { request } from "../../../helpers/request";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../../navigation/AuthProvider";
import CardComponent from "./CardComponent";

const StaffsScreen = ({ navigation }) => {
    const [data, setData] = useState();
    const [isLoading, setLoading] = useState(true);
    const [userToken, setUserToken] = useState();
    const { setTransportId } = useContext(AuthContext);
    const [mainCollapsed, setMainCollapsed] = useState(true);
    const [selectedBranch, setSelectedBranch] = useState();
    const [branchModalVisible, setBranchModalVisible] = useState(false);
    const [branches, setBranches] = useState();
    const [elements, setElements] = useState([])
   
     const QUERY = `query{
        staffs{
          staffId
          staffPhoto
          staffInfo{
            userId
            mainContact
            secondContact
            firstName
            lastName
            branch{
              branchId
              branchName
            }
          }
        }
      }`;

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

    const toggleMainExpanded = () => {
        setMainCollapsed(!mainCollapsed);
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
                <View style={styles.container}>
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
                        {data ? (
                            <Text
                                style={styles.filterItem2}
                            >{`${data.staffs.length}`}</Text>
                        ) : null}
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
                    <View
                        style={styles.scrollBox}
                    >
                        {isLoading ? (
                            <View style={styles.loadingIndicator}>
                                <ActivityIndicator
                                    size="large"
                                    color="#007AFF"
                                />
                            </View>
                        ) : (
                            <FlatList
                                data={
                                    data.staffs != undefined
                                        ? data.staffs
                                        : []
                                }
                                renderItem={({ item }) => (
                                    <CardComponent
                                        item={item}
                                        elements={elements}
                                        setElements={setElements}
                                    />
                                )}
                                keyExtractor={(item) => item.staffId}
                                showsVerticalScrollIndicator={false}
                            />
                        )}
                    </View>
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

export default StaffsScreen;
