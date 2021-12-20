import React, { useState, useEffect } from "react";
import {
    ScrollView,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Dimensions,
    ActivityIndicator,
    Modal,
    FlatList,
    Pressable,
} from "react-native";
import Collapsible from "react-native-collapsible";
import ModalSelector from "react-native-modal-selector";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
    Entypo,
    Ionicons,
    AntDesign,
    Feather,
    MaterialIcons,
} from "@expo/vector-icons";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { request } from "../../../helpers/request";
import { styles } from "./styles";
import { showDate } from "../../../components/DateFormat";
import { colors } from "../../../constants/color";
import AllOrderCardComponent from "./AllOrderComponent";

const height = Dimensions.get("window").height;

const ProductListScreen = ({ navigation, route }) => {
    const [mainCollapsed, setMainCollapsed] = useState(true);
    const [addressCollapsed, setAddressCollapsed] = useState(true);
    let [selectedFromDate, setSelectedFromDate] = useState(new Date());
    let [selectedToDate, setSelectedToDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isDatePickerVisibleTwo, setDatePickerVisibilityTwo] =
        useState(false);
    let [selectedTariff, setSelectedTariff] = useState("");
    let [selectedStatus, setSelectedStatus] = useState("");
    let [selectedTimeRemaining, setSelectedTimeRemaining] = useState("");

    const [selectedState, setSelectedState] = useState();
    const [selectedRegion, setSelectedRegion] = useState();
    const [selectedArea, setSelectedArea] = useState();
    const [selectedNeighborhood, setSelectedNeighborhood] = useState();
    const [selectedStreet, setSelectedStreet] = useState();

    let [states, setStates] = useState([]);
    let [branches, setBranches] = useState([]);
    let [regions, setRegions] = useState([]);
    let [areas, setAreas] = useState([]);
    let [neighborhoods, setNeighborhoods] = useState([]);
    let [streets, setStreets] = useState([]);

    const [orders, setOrders] = useState();

    const [stateModalVisible, setStateModalVisible] = useState(false);
    const [regionModalVisible, setRegionModalVisible] = useState(false);
    const [areaModalVisible, setAreaModalVisible] = useState(false);
    const [neighborhoodModalVisible, setNeighborhoodModalVisible] =
        useState(false);
    const [streetModalVisible, setStreetModalVisible] = useState(false);

    const [isLoading, setLoading] = useState(true);
    const [elements, setElements] = useState([]);

    let firstname;
    let age;
    let index = 0;
    let genderIndex = 0;

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

    useEffect(() => {
        async function fetchData() {
            try {
                const value = await AsyncStorage.getItem("staff_token");
                setOrders(await request(GET_ALL_ORDERS_QUERY, null, value));
                // setBranches(await request(GET_BRANCHES_QUERY, null, value));
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        const value = await AsyncStorage.getItem("staff_token");
        let data = await fetch("https://pokiza.herokuapp.com/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: value,
            },
            body: JSON.stringify({
                query: GET_ALL_ORDERS_QUERY,
                variables: null,
            }),
        });
        let jsonData = await data.json();

        setOrders(jsonData.data);
        setRefreshing(false);
    }, []);

    const toggleMainExpanded = () => {
        setMainCollapsed(!mainCollapsed);
    };

    const toggleAddressExpanded = () => {
        setAddressCollapsed(!addressCollapsed);
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
                onPress={async () => {
                    setSelectedArea(item);
                    setAreaModalVisible(!areaModalVisible);
                    setSelectedBranch(
                        await request(
                            GET_BRANCHES_QUERY,
                            { regionId: selectedRegion.regionId },
                            userToken
                        )
                    );
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

    const genderData = [
        { key: genderIndex++, label: "Male" },
        { key: genderIndex++, label: "Female" },
    ];

    const data = [
        { key: index++, section: true, label: "Fruits" },
        { key: index++, label: "Red Apples" },
        { key: index++, label: "Yakkasaroy tumani, 4-1" },
        {
            key: index++,
            label: "Cranberries",
            accessibilityLabel: "Tap here for cranberries",
        },
        // etc...
        // Can also add additional custom keys which are passed to the onChange callback
        { key: index++, label: "Vegetable", customKey: "Not a fruit" },
    ];

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
                <Text style={styles.filterItem1}>Tanlandi: {`${3}`}</Text>
                {orders ? (
                    <Text
                        style={styles.filterItem2}
                    >{`${orders.orders.length}`}</Text>
                ) : null}
            </TouchableOpacity>
            <Collapsible
                style={styles.hiddenContent}
                collapsed={mainCollapsed}
                align="center"
            >
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.content}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Date input ------------------------------------------------------- */}
                    <View
                        style={{ ...styles.pickerWrapper, height: height / 11 }}
                    >
                        <View
                            style={{
                                ...styles.preTextWrapperStyle,
                                width: "66%",
                                flex: 3,
                            }}
                        >
                            <Text style={styles.preText}>Vaqt bo'yicha</Text>
                            <Text style={styles.addressPlaceholder}>
                                {showDate(selectedFromDate, false)}-{` `}
                                {showDate(selectedToDate, false)}
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={styles.datePicker}
                            onPress={() => setDatePickerVisibility(true)}
                        >
                            <Text>* dan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.datePicker}
                            onPress={() => setDatePickerVisibilityTwo(true)}
                        >
                            <Text>* gacha</Text>
                        </TouchableOpacity>

                        {/* Modal DatePickers -------------------------------------------- */}
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onCancel={() => setDatePickerVisibility(false)}
                            onConfirm={(date) => {
                                setSelectedFromDate(date);
                                setDatePickerVisibility(false);
                            }}
                        />
                        <DateTimePickerModal
                            isVisible={isDatePickerVisibleTwo}
                            mode="date"
                            onCancel={() => setDatePickerVisibilityTwo(false)}
                            onConfirm={(date) => {
                                setSelectedToDate(date);
                                setDatePickerVisibilityTwo(false);
                            }}
                        />
                    </View>

                    {/* Tariff input ----------------------------------------------------------- */}
                    <View
                        style={{
                            ...styles.pickerWrapper,
                            marginBottom: 24,
                        }}
                    >
                        <View style={styles.preTextWrapperStyle}>
                            <Text style={styles.preText}>Tarif bo'yicha</Text>
                        </View>
                        <ModalSelector
                            data={genderData}
                            initValue="Select something yummy!"
                            supportedOrientations={["portrait"]}
                            overlayStyle={{
                                flex: 1,
                                padding: "5%",
                                justifyContent: "center",
                                backgroundColor: "rgba(0,0,0,0.5)",
                            }}
                            selectTextStyle={{
                                color: "#fff",
                            }}
                            touchableActiveOpacity={0.5}
                            accessible={true}
                            scrollViewAccessibilityLabel={"Scrollable options"}
                            cancelButtonAccessibilityLabel={"Cancel Button"}
                            onChange={(option) => {
                                setSelectedTariff(option.label);
                            }}
                        >
                            <TextInput
                                style={{
                                    color: "#A5A5A8",
                                    padding: 10,
                                    height: "100%",
                                }}
                                editable={true}
                                placeholder={
                                    selectedTariff ? selectedTariff : "A-Z"
                                }
                                value={selectedTariff}
                            />
                        </ModalSelector>
                    </View>

                    {/* Status input -------------------------------------------------------------- */}
                    <View
                        style={{
                            ...styles.pickerWrapper,
                            marginBottom: 24,
                        }}
                    >
                        <View style={styles.preTextWrapperStyle}>
                            <Text style={styles.preText}>Holati</Text>
                        </View>
                        <ModalSelector
                            data={genderData}
                            initValue="Select something yummy!"
                            supportedOrientations={["portrait"]}
                            overlayStyle={{
                                flex: 1,
                                padding: "5%",
                                justifyContent: "center",
                                backgroundColor: "rgba(0,0,0,0.5)",
                            }}
                            selectTextStyle={{
                                color: "#fff",
                            }}
                            touchableActiveOpacity={0.5}
                            accessible={true}
                            scrollViewAccessibilityLabel={"Scrollable options"}
                            cancelButtonAccessibilityLabel={"Cancel Button"}
                            onChange={(option) => {
                                setSelectedStatus(option.label);
                            }}
                        >
                            <TextInput
                                style={{
                                    color: "#A5A5A8",
                                    padding: 10,
                                    height: "100%",
                                }}
                                editable={true}
                                placeholder={
                                    selectedStatus ? selectedStatus : "A-Z"
                                }
                                value={selectedStatus}
                            />
                        </ModalSelector>
                    </View>

                    {/* Time Remaining input ----------------------------------------------- */}
                    <View
                        style={{
                            ...styles.pickerWrapper,
                            marginBottom: 24,
                        }}
                    >
                        <View style={styles.preTextWrapperStyle}>
                            <Text style={styles.preText}>Tugatilish vaqti</Text>
                        </View>
                        <ModalSelector
                            data={genderData}
                            initValue="Select something yummy!"
                            supportedOrientations={["portrait"]}
                            overlayStyle={{
                                flex: 1,
                                padding: "5%",
                                justifyContent: "center",
                                backgroundColor: "rgba(0,0,0,0.5)",
                            }}
                            selectTextStyle={{
                                color: "#fff",
                            }}
                            touchableActiveOpacity={0.5}
                            accessible={true}
                            scrollViewAccessibilityLabel={"Scrollable options"}
                            cancelButtonAccessibilityLabel={"Cancel Button"}
                            onChange={(option) => {
                                setSelectedTimeRemaining(option.label);
                            }}
                        >
                            <TextInput
                                style={{
                                    color: "#A5A5A8",
                                    padding: 10,
                                    height: "100%",
                                }}
                                editable={true}
                                placeholder={
                                    selectedTimeRemaining
                                        ? selectedTimeRemaining
                                        : "A-Z"
                                }
                                value={selectedTimeRemaining}
                            />
                        </ModalSelector>
                    </View>

                    <View
                        style={{
                            ...styles.pickerWrapper,
                            marginBottom: 24,
                        }}
                    >
                        <View style={styles.preTextWrapperStyle}>
                            <Text style={styles.preText}>Holati</Text>
                        </View>
                        <ModalSelector
                            data={genderData}
                            initValue="Select something yummy!"
                            supportedOrientations={["portrait"]}
                            overlayStyle={{
                                flex: 1,
                                padding: "5%",
                                justifyContent: "center",
                                backgroundColor: "rgba(0,0,0,0.5)",
                            }}
                            selectTextStyle={{
                                color: "#fff",
                            }}
                            touchableActiveOpacity={0.5}
                            accessible={true}
                            scrollViewAccessibilityLabel={"Scrollable options"}
                            cancelButtonAccessibilityLabel={"Cancel Button"}
                            onChange={(option) => {
                                setSelectedStatus(option.label);
                            }}
                        >
                            <TextInput
                                style={{
                                    color: "#A5A5A8",
                                    padding: 10,
                                    height: "100%",
                                }}
                                editable={true}
                                placeholder={
                                    selectedStatus ? selectedStatus : "A-Z"
                                }
                                value={selectedStatus}
                            />
                        </ModalSelector>
                    </View>

                    <TouchableOpacity
                        onPress={toggleAddressExpanded}
                        style={styles.filterBox}
                    >
                        <View style={styles.filterIconWrapper}>
                            <AntDesign name="filter" size={22} color="black" />
                            <Text style={styles.headerText}>
                                Manzil bo'yicha filter
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <Collapsible
                        style={styles.hiddenContent}
                        collapsed={addressCollapsed}
                        align="center"
                    >
                        {/* State input ----------------------------------------------------------- */}
                        <View style={styles.pickerWrapper}>
                            <View style={styles.preTextWrapperStyle}>
                                <Text style={styles.preText}>
                                    <Text style={styles.requiredLine}>* </Text>
                                    Viloyat
                                </Text>
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
                                    <Text style={styles.requiredLine}>* </Text>
                                    Shahar/Tuman
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
                                disabled={selectedState ? false : true}
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
                                disabled={selectedRegion ? false : true}
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
                                disabled={selectedArea ? false : true}
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
                                disabled={selectedNeighborhood ? false : true}
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
                    </Collapsible>

                    {/* Reset Filter Button ------------------------------------------------ */}
                    <View style={styles.resetWrapper}>
                        <TouchableOpacity
                            onPress={() => {
                                setSelectedFromDate(new Date());
                                setSelectedToDate(new Date());
                                setSelectedTariff("");
                                setSelectedStatus("");
                                setSelectedTimeRemaining("");
                            }}
                        >
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
                </ScrollView>
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
                    renderItem={({ item }) => (
                        <AllOrderCardComponent
                            item={item}
                            elements={elements}
                            setElements={setElements}
                        />
                    )}
                    keyExtractor={(item) => item.orderId}
                />
            )}

            {elements.length > 0 ? (
                <TouchableOpacity
                    style={styles.stickOrder}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.stickOrderTxt}>
                        Transportga biriktirish
                    </Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={styles.fab}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="ios-arrow-back" size={28} color="white" />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default ProductListScreen;
