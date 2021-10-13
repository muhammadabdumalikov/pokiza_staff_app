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
import * as Animatable from "react-native-animatable";
import Collapsible from "react-native-collapsible";
import Accordion from "react-native-collapsible/Accordion";
import { Picker } from "@react-native-picker/picker";
import Slider from "../../../components/Slider";

import { styles } from "./styles";

const height = Dimensions.get("window").height;

const ContactsScreen = () => {
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
                    <Slider />
                    {/* Address input ----------------------------------------------------------- */}
                    <View style={styles.pickerWrapper}>
                        <View style={styles.preTextWrapperStyle}>
                            <Text style={styles.preText}>Address</Text>
                        </View>
                        <Picker
                            style={styles.picker}
                            selectedValue={selectedAddress}
                            onValueChange={(itemValue, itemIndex) => {
                                setSelectedAddress(itemValue);
                            }}
                        >
                            <Picker.Item label="18" value="18" />
                            <Picker.Item label="20" value="20" />
                        </Picker>
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
                            <Picker.Item label="18" value="18" />
                            <Picker.Item label="20" value="20" />
                        </Picker>
                    </View>
                    <View style={styles.resetWrapper}>
                        <TouchableOpacity>
                            <Text style={styles.resetText}>Reset Filter</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Collapsible>
            <Text>Text</Text>
        </ScrollView>
    );
};

export default ContactsScreen;
