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
                    <Picker
                        style={styles.picker}
                        selectedValue={selectedAge}
                        onValueChange={(itemValue, itemIndex) => {
                            setSelectedAge(itemValue);
                        }}
                    >
                        <Picker.Item label="18" value="18" />
                        <Picker.Item label="20" value="20" />
                    </Picker>
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
                    <View style={styles.addressWrapper}>
                        <Picker
                            style={styles.picker}
                            selectedValue={selectedAge}
                            onValueChange={(itemValue, itemIndex) => {
                                setSelectedAge(itemValue);
                            }}
                        >
                            <Picker.Item label="18" value="18" />
                            <Picker.Item label="20" value="20" />
                        </Picker>
                    </View>
                </View>
            </Collapsible>
            <Text>Text</Text>
        </ScrollView>
    );
};

export default ContactsScreen;
