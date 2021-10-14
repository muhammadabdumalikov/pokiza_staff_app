import React, { useState, useRef, useCallback } from "react";
import {
    SafeAreaView,
    Switch,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Dimensions,
    Platform,
} from "react-native";
import Collapsible from "react-native-collapsible";
import { Picker } from "@react-native-picker/picker";
import ModalSelector from "react-native-modal-selector";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";

import Slider from "../../../components/Slider";
import { styles } from "./styles";

const height = Dimensions.get("window").height;

const ContactsScreen = ({navigation, route}) => {
    const [collapsed, setCollapsed] = useState(true);
    let [selectedAge, setSelectedAge] = useState("");
    let [selectedStatus, setSelectedStatus] = useState("");
    let [selectedAddress, setSelectedAddress] = useState("");
    let [selectedGender, setSelectedGender] = useState("");
    let firstname;
    let age;

    const toggleExpanded = () => {
        setCollapsed(!collapsed);
    };

    let index = 0;
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

    let state = {
        textInputValue: "",
    };

    return (
        <ScrollView style={styles.container}>
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
                        <Picker
                            style={styles.picker}
                            selectedValue={selectedStatus}
                            onValueChange={(itemValue, itemIndex) => {
                                setSelectedStatus(itemValue);
                            }}
                        >
                            <Picker.Item label="18" value="18" />
                            <Picker.Item label="20" value="20" />
                        </Picker>
                    </View>
                    {/* Name input --------------------------------------------------------------- */}
                    <View
                        style={{ ...styles.inputContainer, marginBottom: 16 }}
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                    >
                        <View style={styles.preTextWrapperStyle}>
                            <Text style={styles.preText}>Name</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            numberOfLines={1}
                            placeholder="Enter first name"
                            placeholderTextColor="#B8B8BB"
                            onChangeText={(value) => (firstname = value)}
                            keyboardType="default"
                            // autoFocus={true}
                            maxLength={9}
                        />
                    </View>
                    {/* Age input ------------------------------------------------------------------- */}
                    <View
                        style={styles.inputContainer}
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                    >
                        <View style={styles.preTextWrapperStyle}>
                            <Text style={styles.preText}>Age</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            numberOfLines={1}
                            placeholder="24-62"
                            placeholderTextColor="#B8B8BB"
                            onChangeText={(value) => (age = value)}
                            keyboardType="default"
                            // autoFocus={true}
                            maxLength={9}
                        />
                    </View>
                    <View
                        style={{
                            borderBottomColor: "black",
                            borderBottomWidth: 0.9,
                            marginHorizontal: 16,
                        }}
                    ></View>
                    <Slider />
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
                                state.textInputValue = option.label;
                            }}
                        >
                            <TextInput
                                style={{
                                    borderColor: "#ccc",
                                    padding: 10,
                                    height: "100%",
                                }}
                                editable={false}
                                placeholder="Select something yummy!"
                                value={state.textInputValue}
                            />
                        </ModalSelector>
                    </View>
                    {/* Gender input -------------------------------------------------------------- */}
                    <View style={{ ...styles.pickerWrapper, marginBottom: 24 }}>
                        <View style={styles.preTextWrapperStyle}>
                            <Text style={styles.preText}>Gender</Text>
                        </View>
                        <Picker
                            style={styles.picker}
                            selectedValue={selectedGender}
                            onValueChange={(itemValue, itemIndex) => {
                                setSelectedGender(itemValue);
                            }}
                        >
                            <Picker.Item label="Yakkasaroy tumani" value="18" />
                            <Picker.Item label="20" value="20" />
                        </Picker>
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
            {/* Divider --------------------------------------------------------------- */}
            <View style={styles.divider} />
            {/* Result box of staffs ------------------------------------------------------- */}
            <View style={styles.resultBox}>
                <View style={styles.resultLineBox}>
                    <View style={styles.resultId}>
                        <Ionicons name="md-heart" size={24} color="#E50000" />
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
                    <Text style={styles.resultPhoneNumbers}>+998911000000</Text>
                    <Text style={styles.resultPhoneNumbers}>+998901111111</Text>
                </View>
                <View style={styles.resultLineBox}>
                    <Text style={styles.resultPhoneNumbers}>Age: {"28"}</Text>
                    <Text style={styles.resultPhoneNumbers}>
                        Gender: {"Male"}
                    </Text>
                </View>
            </View>
            <View
                style={{ flex: 1, justifyContent: "space-around", padding: 50 }}
            >
                {/* // Default mode */}
                {/* <ModalSelector
                    style={{ width: 100}}
                    data={data}
                    initValue="Select something yummy!"
                    onChange={(option) => {
                        alert(`${option.label} (${option.key}) nom nom nom`);
                    }}
                /> */}
                {/* // Wrapper */}

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
            </View>
            <TouchableOpacity style={styles.fab} onPress={() => navigation.goBack()}>
                <Ionicons name="ios-arrow-back" size={28} color="white" />
            </TouchableOpacity>
        </ScrollView>
    );
};

export default ContactsScreen;
