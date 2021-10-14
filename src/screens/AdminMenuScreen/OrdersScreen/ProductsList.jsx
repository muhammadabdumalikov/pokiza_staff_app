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
import { Entypo, Ionicons, AntDesign, Feather } from "@expo/vector-icons";

import { styles } from "./styles";

const height = Dimensions.get("window").height;

const ProductListScreen = ({ navigation, route }) => {
    const [collapsed, setCollapsed] = useState(true);
    let [selectedTariffs, setSelectedTariffs] = useState("");
    let [selectedAddress, setSelectedAddress] = useState("");
    let [selectedAlphabet, setSelectedAlphabet] = useState("");

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
                    {/* Tariffs input ------------------------------------------------------- */}
                    <View style={styles.pickerWrapper}>
                        <View style={styles.preTextWrapperStyle}>
                            <Text style={styles.preText}>Tariffs</Text>
                        </View>
                        <ModalSelector
                            data={data}
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
                                setSelectedTariffs(option.label);
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
                                    selectedTariffs
                                        ? selectedTariffs
                                        : "Add tariffs"
                                }
                                value={selectedTariffs}
                            />
                        </ModalSelector>
                    </View>

                    {/* Address input ----------------------------------------------------------- */}
                    <View
                        style={{ ...styles.pickerWrapper, height: height / 11 }}
                    >
                        <View
                            style={{
                                ...styles.preTextWrapperStyle,
                                width: "66%",
                            }}
                        >
                            <Text style={styles.preText}>Address</Text>
                            <Text style={styles.addressPlaceholder}>
                                {selectedAddress}
                            </Text>
                        </View>
                        <ModalSelector
                            data={data}
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
                                setSelectedAddress(option.label);
                            }}
                        >
                            <TextInput
                                style={{
                                    color: "#A5A5A8",
                                    padding: 10,
                                    height: "100%",
                                }}
                                editable={true}
                                placeholder="Detail"
                                value="Detail"
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
                            <Text style={styles.preText}>Alphabet</Text>
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
                                setSelectedAlphabet(option.label);
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
                                    selectedAlphabet ? selectedAlphabet : "A-Z"
                                }
                                value={selectedAlphabet}
                            />
                        </ModalSelector>
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
                <View style={styles.resultBox}>
                    <View style={styles.resultLineBox}>
                        <View style={styles.resultId}>
                            <Text style={styles.resultIdText}>{"001523"}</Text>
                        </View>
                        <Entypo name="location-pin" size={24} color="black" />
                    </View>
                    <View style={styles.resultLineBox}>
                        <Text style={styles.resultFullName}>
                            Hamdamboyev Hudoyberdi
                        </Text>
                    </View>
                    <View style={styles.resultLineBox}>
                        <Text style={styles.resultPhoneNumbers}>
                            +998911000000
                        </Text>
                        <Text style={styles.resultPhoneNumbers}>
                            +998901111111
                        </Text>
                    </View>
                    <View style={styles.resultLineBox}>
                        <Text style={styles.tariffText}>
                            Tariff:{"    "}
                            <Text
                                style={{
                                    ...styles.tariffDynamicText,
                                    color: "#E50000",
                                }}
                            >
                                {"Navbatsiz".toUpperCase()}
                            </Text>
                        </Text>
                        <Text style={styles.resultPhoneNumbers}></Text>
                    </View>
                    <View style={styles.resultLineBox}>
                        <TouchableOpacity style={styles.acceptBox}>
                            <Feather name="check" size={24} color="#4BCE00" />
                            <Text style={styles.acceptText}>Accept</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.deleteBox}>
                            <AntDesign name="delete" size={24} color="black" />
                            <Text style={styles.deleteText}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Fake Data ---------------------------------------------------- */}
                <View style={styles.resultBox}>
                    <View style={styles.resultLineBox}>
                        <View style={styles.resultId}>
                            <Text style={styles.resultIdText}>{"001523"}</Text>
                        </View>
                        <Entypo name="location-pin" size={24} color="black" />
                    </View>
                    <View style={styles.resultLineBox}>
                        <Text style={styles.resultFullName}>
                            Hamdamboyev Hudoyberdi
                        </Text>
                    </View>
                    <View style={styles.resultLineBox}>
                        <Text style={styles.resultPhoneNumbers}>
                            +998911000000
                        </Text>
                        <Text style={styles.resultPhoneNumbers}>
                            +998901111111
                        </Text>
                    </View>
                    <View style={styles.resultLineBox}>
                        <Text style={styles.tariffText}>
                            Tariff:{"    "}
                            <Text
                                style={{
                                    ...styles.tariffDynamicText,
                                    color: "#007AFF",
                                }}
                            >
                                {"Oddiy".toUpperCase()}
                            </Text>
                        </Text>
                        <Text style={styles.resultPhoneNumbers}></Text>
                    </View>
                    <View style={styles.resultLineBox}>
                        <TouchableOpacity style={styles.acceptBox}>
                            <Feather name="check" size={24} color="#4BCE00" />
                            <Text style={styles.acceptText}>Accept</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.deleteBox}>
                            <AntDesign name="delete" size={24} color="black" />
                            <Text style={styles.deleteText}>Delete</Text>
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

export default ProductListScreen;
