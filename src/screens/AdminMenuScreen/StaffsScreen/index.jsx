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
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";

import { sliderStyles, styles } from "./styles";

const height = Dimensions.get("window").height;

const StaffsScreen = ({ navigation, route }) => {
    const [collapsed, setCollapsed] = useState(true);
    let [selectedAge, setSelectedAge] = useState("");
    let [selectedStatus, setSelectedStatus] = useState("");
    let [selectedAddress, setSelectedAddress] = useState("");
    let [selectedGender, setSelectedGender] = useState("");
    const [multiSliderValue, setMultiSliderValue] = useState([16, 99]);

    let firstname;
    let age;
    let index = 0;
    let genderIndex = 0;

    const toggleExpanded = () => {
        setCollapsed(!collapsed);
    };
    const multiSliderValuesChange = (values) => setMultiSliderValue(values);

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
                {/* Permission input ----------------------------------------------------- */}
                <View style={styles.content}>
                    <View style={styles.pickerWrapper}>
                        <View style={styles.preTextWrapperStyle}>
                            <Text style={styles.preText}>Permission</Text>
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
                    {/* Name input --------------------------------------------------------------- */}
                    <View
                        style={{
                            ...styles.inputContainer,
                            marginBottom: 16,
                        }}
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
                            placeholder={`${multiSliderValue[0]}-${multiSliderValue[1]}`}
                            placeholderTextColor="#B8B8BB"
                            keyboardType="default"
                            // autoFocus={true}
                            maxLength={9}
                        />
                    </View>

                    {/* Slider ----------------------------------------------------------- */}
                    <View style={sliderStyles.viewContainer}>
                        <View style={sliderStyles.sliderWrapper}>
                            <View style={sliderStyles.labelWrapper}>
                                <Text style={sliderStyles.labelText}>
                                    {multiSliderValue[0]}
                                </Text>
                                <MultiSlider
                                    markerStyle={{
                                        ...Platform.select({
                                            ios: {
                                                height: 20,
                                                width: 20,
                                                shadowColor: "#000000",
                                                shadowOffset: {
                                                    width: 0,
                                                    height: 3,
                                                },
                                                shadowRadius: 1,
                                                shadowOpacity: 0.1,
                                            },
                                            android: {
                                                height: 20,
                                                width: 20,
                                                borderRadius: 50,
                                                backgroundColor: "#1792E8",
                                            },
                                        }),
                                    }}
                                    pressedMarkerStyle={{
                                        ...Platform.select({
                                            android: {
                                                height: 30,
                                                width: 30,
                                                borderRadius: 20,
                                                backgroundColor: "#148ADC",
                                            },
                                        }),
                                    }}
                                    selectedStyle={{
                                        backgroundColor: "#1792E8",
                                    }}
                                    trackStyle={{
                                        backgroundColor: "#CECECE",
                                    }}
                                    touchDimensions={{
                                        height: 20,
                                        width: 20,
                                        borderRadius: 10,
                                        slipDisplacement: 40,
                                    }}
                                    values={[
                                        multiSliderValue[0],
                                        multiSliderValue[1],
                                    ]}
                                    sliderLength={280}
                                    onValuesChange={multiSliderValuesChange}
                                    min={16}
                                    max={72}
                                    allowOverlap={false}
                                    minMarkerOverlapDistance={10}
                                />
                                <Text style={sliderStyles.labelText}>
                                    {multiSliderValue[1]}
                                </Text>
                            </View>
                        </View>
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
                    {/* Gender input -------------------------------------------------------------- */}
                    <View
                        style={{
                            ...styles.pickerWrapper,
                            marginBottom: 24,
                        }}
                    >
                        <View style={styles.preTextWrapperStyle}>
                            <Text style={styles.preText}>Gender</Text>
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
                        <TouchableOpacity
                            onPress={() => {
                                setSelectedStatus("");
                                setSelectedAddress("");
                                setSelectedGender("");
                                setMultiSliderValue([16, 99]);
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
                {/* Result box of staffs ------------------------------------------------------- */}
                <View style={styles.resultBox}>
                    <View style={styles.resultLineBox}>
                        <View style={styles.resultId}>
                            <Text style={styles.resultIdText}>{"001523"}</Text>
                        </View>
                        <Entypo name="location-pin" size={24} color="black" />
                    </View>
                    <View style={styles.resultLineBigBox}>
                        <Text style={styles.resultFullName}>
                            Hamdamboyev Hudoyberdi
                        </Text>
                        <Text style={styles.resultPermissionText}>Permission: {"Operator"}</Text>
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
                        <Text style={styles.resultPhoneNumbers}>
                            Age: {"28"}
                        </Text>
                        <Text style={styles.resultPhoneNumbers}>
                            Gender: {"Male"}
                        </Text>
                    </View>
                </View>
               
               

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

export default StaffsScreen;
