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
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";

const ModeratorsScreen = ({ navigation, route }) => {
    const [collapsed, setCollapsed] = useState(true);
    let [selectedAge, setSelectedAge] = useState("");
    let [selectedStatus, setSelectedStatus] = useState("");
    let [selectedAddress, setSelectedAddress] = useState("");
    let [selectedGender, setSelectedGender] = useState("");

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
        { key: index++, label: "Cherries" },
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
                    <View style={styles.pickerWrapper}>
                        <View style={styles.preTextWrapperStyle}>
                            <Text style={styles.preText}>Status</Text>
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
                                setSelectedStatus(option.label);
                            }}
                        >
                            <TextInput
                                style={{
                                    borderColor: "#ccc",
                                    padding: 10,
                                    height: "100%",
                                }}
                                editable={true}
                                placeholder={
                                    selectedStatus
                                        ? selectedStatus
                                        : "Add status"
                                }
                                value={selectedStatus}
                            />
                        </ModalSelector>
                    </View>
                  
                    {/* Address input ----------------------------------------------------------- */}
                    <View style={styles.pickerWrapper}>
                        <View style={styles.preTextWrapperStyle}>
                            <Text style={styles.preText}>Address</Text>
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
                                    borderColor: "#ccc",
                                    padding: 10,
                                    height: "100%",
                                }}
                                editable={true}
                                placeholder={
                                    selectedAddress
                                        ? selectedAddress
                                        : "Add adress"
                                }
                                value={selectedAddress}
                            />
                        </ModalSelector>
                    </View>
                    {/* Gender input -------------------------------------------------------------- */}
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
                                setSelectedGender(option.label);
                            }}
                        >
                            <TextInput
                                style={{
                                    borderColor: "#ccc",
                                    padding: 10,
                                    height: "100%",
                                }}
                                editable={true}
                                placeholder={
                                    selectedGender
                                        ? selectedGender
                                        : "Add gender"
                                }
                                value={selectedGender}
                            />
                        </ModalSelector>
                    </View>
                    {/* Reset Filter Button ------------------------------------------------ */}
                    <View style={styles.resetWrapper}>
                        <TouchableOpacity>
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

export default ModeratorsScreen;
