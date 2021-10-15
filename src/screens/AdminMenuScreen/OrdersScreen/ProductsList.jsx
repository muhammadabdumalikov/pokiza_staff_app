import React, { useState } from "react";
import {
    ScrollView,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Dimensions,
    Platform,
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

import { styles } from "./styles";

const height = Dimensions.get("window").height;

const OrderListScreen = ({ navigation, route }) => {
    const [collapsed, setCollapsed] = useState(true);
    let [selectedFromDate, setSelectedFromDate] = useState(
        new Date().toLocaleDateString()
    );
    let [selectedToDate, setSelectedToDate] = useState(
        new Date().toLocaleDateString()
    );
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isDatePickerVisibleTwo, setDatePickerVisibilityTwo] =
        useState(false);
    let [selectedType, setSelectedType] = useState("");
    let [selectedStatus, setSelectedStatus] = useState("");
    let [selectedTimeRemaining, setSelectedTimeRemaining] = useState("");

    let firstname;
    let age;
    let index = 0;
    let genderIndex = 0;

    const toggleExpanded = () => {
        setCollapsed(!collapsed);
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
            <TouchableOpacity onPress={toggleExpanded} style={styles.filterBox}>
                <Text style={styles.headerText}>Filter by</Text>
                {/*Heading of Single Collapsible*/}
            </TouchableOpacity>
            <Collapsible
                style={styles.hiddenContent}
                collapsed={collapsed}
                align="center"
            >
                <View style={styles.content}>
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
                            <Text style={styles.preText}>Date</Text>
                            <Text style={styles.addressPlaceholder}>
                                {selectedFromDate}-{selectedToDate}
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={styles.datePicker}
                            onPress={() => setDatePickerVisibility(true)}
                        >
                            <Text>From</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.datePicker}
                            onPress={() => setDatePickerVisibilityTwo(true)}
                        >
                            <Text>To</Text>
                        </TouchableOpacity>

                        {/* Modal DatePickers -------------------------------------------- */}
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onCancel={() => setDatePickerVisibility(false)}
                            onConfirm={(date) => {
                                setSelectedFromDate(date.toLocaleDateString());
                                setDatePickerVisibility(false);
                            }}
                        />
                        <DateTimePickerModal
                            isVisible={isDatePickerVisibleTwo}
                            mode="date"
                            onCancel={() => setDatePickerVisibilityTwo(false)}
                            onConfirm={(date) => {
                                setSelectedToDate(date.toLocaleDateString());
                                setDatePickerVisibilityTwo(false);
                            }}
                        />
                    </View>

                    {/* Type input ----------------------------------------------------------- */}
                    <View
                        style={{
                            ...styles.pickerWrapper,
                            marginBottom: 24,
                        }}
                    >
                        <View style={styles.preTextWrapperStyle}>
                            <Text style={styles.preText}>Type</Text>
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
                                setSelectedType(option.label);
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
                                    selectedType ? selectedType : "A-Z"
                                }
                                value={selectedType}
                            />
                        </ModalSelector>
                    </View>

                    {/* Alphabet input -------------------------------------------------------------- */}
                    <View
                        style={{
                            ...styles.pickerWrapper,
                            marginBottom: 24,
                        }}
                    >
                        <View style={styles.preTextWrapperStyle}>
                            <Text style={styles.preText}>Status</Text>
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
                            <Text style={styles.preText}>Time Remaining</Text>
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

                    {/* Reset Filter Button ------------------------------------------------ */}
                    <View style={styles.resetWrapper}>
                        <TouchableOpacity
                            onPress={() => {
                                setSelectedFromDate(
                                    new Date().toLocaleDateString()
                                );
                                setSelectedToDate(
                                    new Date().toLocaleDateString()
                                );
                                setSelectedType("");
                                setSelectedStatus("");
                                setSelectedTimeRemaining("");
                            }}
                        >
                            <Text style={styles.resetText}>Reset Filter</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Hide Filter Button ------------------------------------------------------ */}
                    <View style={styles.hideButtonWrapper}>
                        <TouchableOpacity onPress={toggleExpanded}>
                            <Text style={styles.hideButtonText}>
                                Hide Filter
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Collapsible>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentStyle}
                showsVerticalScrollIndicator={false}
            >
                <View style={{...styles.resultBox, height: height/3.18}}>
                    <View style={styles.resultLineBox}>
                        <View style={styles.resultId}>
                            <Text>Order ID: </Text>
                            <Text style={styles.resultIdText}>{"#001523"}</Text>
                        </View>
                        <Entypo name="location-pin" size={24} color="black" />
                    </View>
                    <View style={styles.resultLineBox}>
                        <Text style={styles.resultFullName}>
                            Hamdamboyev Hudoyberdi
                        </Text>
                    </View>
                    <View style={styles.resultLineBox}>
                        <Text style={styles.timeText}>
                            Time:{" "}
                            <Text style={styles.timeDynamicText}>
                                1d 23h 51m
                            </Text>
                        </Text>
                        <View style={styles.timeText}>
                            <Text style={styles.timeStatus}>
                                {"In the Drive"}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.resultLineBox}>
                        <View style={styles.resultId}>
                            <Text>Product ID: </Text>
                            <Text style={styles.resultIdText}>{"#001523"}</Text>
                        </View>
                        <Text style={styles.productNameText}>{"Gilam"}</Text>
                    </View>
                    <View style={styles.resultLineBox}>
                        <TouchableOpacity style={styles.deleteBox}>
                            <MaterialIcons
                                name="comment"
                                size={24}
                                color="#007AFF"
                            />
                            <Text style={styles.deleteText}>Comment</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.acceptBox}>
                            <Feather name="check" size={24} color="#4BCE00" />
                            <Text style={styles.acceptText}>Accept</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Fake Data ---------------------------------------------------- */}
                <View style={{...styles.resultBox, height: height/3.18}}>
                    <View style={styles.resultLineBox}>
                        <View style={styles.resultId}>
                            <Text>Order ID: </Text>
                            <Text style={styles.resultIdText}>{"#001523"}</Text>
                        </View>
                        <Entypo name="location-pin" size={24} color="black" />
                    </View>
                    <View style={styles.resultLineBox}>
                        <Text style={styles.resultFullName}>
                            Hamdamboyev Hudoyberdi
                        </Text>
                    </View>
                    <View style={styles.resultLineBox}>
                        <Text style={styles.timeText}>
                            Time:{" "}
                            <Text style={styles.timeDynamicText}>
                                1d 23h 51m
                            </Text>
                        </Text>
                        <View style={styles.timeText}>
                            <Text
                                style={{
                                    ...styles.timeStatus,
                                    backgroundColor: "#FFECB3",
                                    color: "#FFA000",
                                }}
                            >
                                {"Drying"}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.resultLineBox}>
                        <View style={styles.resultId}>
                            <Text>Product ID: </Text>
                            <Text style={styles.resultIdText}>{"#001523"}</Text>
                        </View>
                        <Text style={styles.productNameText}>{"Adyol"}</Text>
                    </View>
                    <View style={styles.resultLineBox}>
                        <TouchableOpacity style={styles.deleteBox}>
                            <MaterialIcons
                                name="comment"
                                size={24}
                                color="#007AFF"
                            />
                            <Text style={styles.deleteText}>Comment</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.acceptBox}>
                            <Feather name="check" size={24} color="#4BCE00" />
                            <Text style={styles.acceptText}>Accept</Text>
                        </TouchableOpacity>
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

export default OrderListScreen;
