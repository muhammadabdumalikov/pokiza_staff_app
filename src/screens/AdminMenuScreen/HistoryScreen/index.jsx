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
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { sliderStyles, styles } from "./styles";

const height = Dimensions.get("window").height;

const HistoryScreen = ({ navigation, route }) => {
    const [collapsed, setCollapsed] = useState(true);
    let [selectedAge, setSelectedAge] = useState("");
    let [selectedStatus, setSelectedStatus] = useState("");
    let [selectedAddress, setSelectedAddress] = useState("");
    let [selectedGender, setSelectedGender] = useState("");
    const [multiSliderValue, setMultiSliderValue] = useState([16, 99]);
    let [selectedFromDate, setSelectedFromDate] = useState(
        new Date().toLocaleDateString()
    );
    let [selectedToDate, setSelectedToDate] = useState(
        new Date().toLocaleDateString()
    );
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isDatePickerVisibleTwo, setDatePickerVisibilityTwo] = useState(false)

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
                {/* Date input ----------------------------------------------------- */}
                <View style={styles.content}>
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
                    {/* UserName input --------------------------------------------------------------- */}
                    <View
                        style={{
                            ...styles.inputContainer,
                            marginBottom: 16,
                        }}
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                    >
                        <View style={styles.preTextWrapperStyle}>
                            <Text style={styles.preText}>User</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            numberOfLines={1}
                            placeholder="User name"
                            placeholderTextColor="#B8B8BB"
                            onChangeText={(value) => (firstname = value)}
                            keyboardType="default"
                            // autoFocus={true}
                            maxLength={9}
                        />
                    </View>

                    {/* Operation Type input -------------------------------------------------------------- */}
                    <View
                        style={{
                            ...styles.pickerWrapper,
                            marginBottom: 24,
                        }}
                    >
                        <View style={styles.preTextWrapperStyle}>
                            <Text style={styles.preText}>Operation Type</Text>
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
                            <Text style={styles.resultIdText}>
                                Transact.Date:
                            </Text>
                        </View>
                        <View style={styles.resultId}>
                            <Text>
                                {"29.01.2021"} {"14:08"}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.resultLineBox}>
                        <View style={styles.resultId}>
                            <Text style={styles.resultIdText}>
                                Office Employer 24
                            </Text>
                        </View>
                        <View style={styles.resultId}>
                            <Text style={styles.tariffDynamicText}>
                                {"@001007"}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={[
                            styles.resultLineBox,
                            styles.resultPermissionText,
                        ]}
                    >
                        <Text style={styles.resultPermissionText}>
                            Modified: {"FirstName"}
                        </Text>
                    </View>
                    <View style={styles.resultLineBox}>
                        <Text style={styles.resultOldValue}>Old Value</Text>
                        <TouchableOpacity>
                            <Text style={styles.resultOldValueLink}>
                                Old Value
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.resultLineBox}>
                        <Text style={styles.resultOldValue}>New Value</Text>
                        <TouchableOpacity>
                            <Text style={styles.resultOldValueLink}>
                                New Value
                            </Text>
                        </TouchableOpacity>
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

export default HistoryScreen;
