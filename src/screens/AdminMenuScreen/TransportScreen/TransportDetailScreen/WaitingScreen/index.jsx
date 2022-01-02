import React, { useContext, useState, useEffect } from "react";
import {
    ScrollView,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Pressable,
    ActivityIndicator,
    Modal,
} from "react-native";
import { Entypo, Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import Collapsible from "react-native-collapsible";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { request } from "../../../../../helpers/request";

import { styles } from "./styles";
import { AuthContext } from "../../../../../navigation/AuthProvider";
import AllOrderCardComponent from "../../../OrdersScreen/AllOrderComponent";

const WaitingScreen = ({ navigation, route }) => {
    const { transportId } = useContext(AuthContext);
    const [userToken, setUserToken] = useState();
    const [addressModalVisible, setAddressModalVisible] = useState(false);
    const [tariffModalVisible, setTariffModalVisible] = useState(false);
    const [address, setAddress] = useState();
    const [orders, setOrders] = useState();
    const [mainCollapsed, setMainCollapsed] = useState(true);
    const [selectedAddress, setSelectedAddress] = useState();
    const [selectedTariff, setSelectedTariff] = useState();

    const [elements, setElements] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const GET_BRANCHES_QUERY = `query{
        branches{
          branchId
          branchName
        }
      }
    `;

    const GET_ALL_ORDERS_QUERY = `{
        orders{
          orderId
             orderStatus
          orderSpecial
          orderOwner{
            clientId
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
            }
          },
          orderAddress{
            addressId
          }
        }
      }
    `;

    const tariffs = [
        { id: "1", tariffName: "Tezkor", value: true },
        { id: "2", tariffName: "Oddiy", value: false },
    ];

    useEffect(() => {
        async function fetchData() {
            try {
                const value = await AsyncStorage.getItem("staff_token");
                setUserToken(value);
                setAddress(await request(GET_BRANCHES_QUERY, null, value));
                setOrders(await request(GET_ALL_ORDERS_QUERY, null, value));
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

    const modalAddress = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ width: "80%", paddingVertical: 15 }}
                onPress={() => {
                    setSelectedAddress(item);
                    setAddressModalVisible(!addressModalVisible);
                }}
            >
                <Text style={{ flex: 1, fontSize: 15, color: "#2196F3" }}>
                    {item.branchName}
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
                    {item.tariffName}
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
                    {/* Tariff input ----------------------------------------------------------- */}
                    <View style={styles.pickerWrapper}>
                        <View style={styles.preTextWrapperStyle}>
                            <Text style={styles.preText}>Tarif bo'yicha</Text>
                        </View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={tariffModalVisible}
                            onRequestClose={() => {
                                setTariffModalVisible(!tariffModalVisible);
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalWrapper}>
                                    <FlatList
                                        data={tariffs}
                                        renderItem={modalTariff}
                                        keyExtractor={(item) => item.id}
                                        contentContainerStyle={styles.modalView}
                                        style={styles.contenModalView}
                                        showsVerticalScrollIndicator={false}
                                    />
                                </View>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() =>
                                        setTariffModalVisible(
                                            !tariffModalVisible
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
                            onPress={() => setTariffModalVisible(true)}
                        >
                            <Text style={styles.textStyle}>
                                {selectedTariff != undefined
                                    ? selectedTariff.tariffName
                                    : "Barcha tariflar"}
                            </Text>
                        </Pressable>
                    </View>

                    {/* Address input ----------------------------------------------------------- */}
                    <View style={styles.pickerWrapper}>
                        <View style={styles.preTextWrapperStyle}>
                            <Text style={styles.preText}>Manzil bo'yicha</Text>
                        </View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={addressModalVisible}
                            onRequestClose={() => {
                                setAddressModalVisible(!addressModalVisible);
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalWrapper}>
                                    <FlatList
                                        data={address ? address.branches : []}
                                        renderItem={modalAddress}
                                        keyExtractor={(item) => item.branchId}
                                        contentContainerStyle={styles.modalView}
                                        style={styles.contenModalView}
                                        showsVerticalScrollIndicator={false}
                                    />
                                </View>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() =>
                                        setAddressModalVisible(
                                            !addressModalVisible
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
                            onPress={() => setAddressModalVisible(true)}
                        >
                            <Text style={styles.textStyle}>
                                {selectedAddress != undefined
                                    ? selectedAddress.branchName
                                    : "Hudud"}
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
                <FlatList
                    data={orders ? orders.orders : []}
                    style={styles.container}
                    contentContainerStyle={styles.contentStyle}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        console.log(item)
                        return <AllOrderCardComponent
                            item={item}
                            elements={elements}
                            setElements={setElements}
                        />;
                    }}
                    keyExtractor={(item) => item.orderId}
                />
            )}

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
