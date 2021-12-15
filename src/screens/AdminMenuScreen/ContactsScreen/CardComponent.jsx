import React, { useState } from "react";
import { View, TouchableOpacity, Text, Dimensions, Modal } from "react-native";
import { Entypo, Ionicons, Feather } from "@expo/vector-icons";

import { colors } from "../../../constants/color";
import { styles } from "./styles";

const height = Dimensions.get("window").height;

function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
        return ele != value;
    });
}

const CardComponent = ({ item, elements, setElements }) => {
    const [resultBox, setResultBox] = useState({
        height: height / 3.98,
        backgroundColor: "gray",
        borderRadius: 15,
        marginHorizontal: 16,
        marginBottom: 16,
        borderColor: "#EDEDED",
        borderWidth: 1,
        overflow: "hidden",
    });

    const [selected, setSelected] = useState(false);
    const [locationModalVsible, setLocationModalVisible] = useState(false);
    const client = item;

    return (
        <>
            {item.clientInfo ? (
                <TouchableOpacity
                    style={
                        selected
                            ? {
                                  height: height / 3.98,
                                  backgroundColor: "gray",
                                  borderRadius: 15,
                                  marginHorizontal: 16,
                                  marginBottom: 16,
                                  borderColor: colors.blue,
                                  borderWidth: 1.5,
                                  overflow: "hidden",
                              }
                            : {
                                  height: height / 3.98,
                                  backgroundColor: "gray",
                                  borderRadius: 15,
                                  marginHorizontal: 16,
                                  marginBottom: 16,
                                  borderColor: colors.gray,
                                  borderWidth: 0.5,
                                  overflow: "hidden",
                              }
                    }
                >
                    <View style={styles.resultLineBox}>
                        <View style={styles.resultId}>
                            <TouchableOpacity
                                onPress={() => {
                                    setSelected(!selected);
                                    if (elements.includes(item.clientId)) {
                                        elements = arrayRemove(
                                            elements,
                                            item.clientId
                                        );
                                        setElements([...elements]);
                                        return;
                                    }
                                    elements.push(item.clientId);
                                    setElements([...elements]);
                                }}
                            >
                                {selected ? (
                                    <Ionicons
                                        name="checkbox-outline"
                                        size={26}
                                        color={colors.blue}
                                    />
                                ) : (
                                    <Ionicons
                                        name="checkbox-outline"
                                        size={26}
                                        color={colors.gray}
                                    />
                                )}
                            </TouchableOpacity>

                            <Ionicons
                                name="heart"
                                size={24}
                                color={colors.red}
                            />
                            <TouchableOpacity>
                                <Text style={styles.resultIdText}>
                                    {`${item.clientId}`}
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity
                                style={styles.locationStyle}
                                onPress={() => setLocationModalVisible(true)}
                            >
                                <Entypo
                                    name="location-pin"
                                    size={24}
                                    color="black"
                                />
                            </TouchableOpacity>
                            <Modal
                                transparent={true}
                                animationType="slide"
                                visible={locationModalVsible}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalWrapper}>
                                        <View style={styles.clientAddress}>
                                            <View style={styles.resultAddress}>
                                                <Text
                                                    style={
                                                        styles.resultAddressText
                                                    }
                                                >
                                                    Manzil:{" "}
                                                </Text>
                                                <Text
                                                    style={
                                                        styles.resultAddressDynamicText
                                                    }
                                                >
                                                    {`${
                                                        client.clientInfo
                                                            .address.state
                                                            ? client.clientInfo
                                                                  .address.state
                                                                  .stateName +
                                                              ` viloyati,`
                                                            : ``
                                                    } ${
                                                        client.clientInfo
                                                            .address.region
                                                            ? client.clientInfo
                                                                  .address
                                                                  .region
                                                                  .regionName +
                                                              ` tumani,`
                                                            : ``
                                                    } ${
                                                        client.clientInfo
                                                            .address
                                                            .neighborhood
                                                            ? client.clientInfo
                                                                  .address
                                                                  .neighborhood
                                                                  .neighborhoodName +
                                                              ` M.F.Y,`
                                                            : ``
                                                    } ${
                                                        client.clientInfo
                                                            .address.street
                                                            ? client.clientInfo
                                                                  .address
                                                                  .street
                                                                  .streetName +
                                                              ` ko'chasi,`
                                                            : ``
                                                    } ${
                                                        client.clientInfo
                                                            .address.homeNumber
                                                            ? client.clientInfo
                                                                  .address
                                                                  .homeNumber +
                                                              `-uy,`
                                                            : ``
                                                    }`}
                                                </Text>
                                            </View>
                                            <View
                                                style={
                                                    styles.resultAddressLocation
                                                }
                                            >
                                                <Entypo
                                                    name="location-pin"
                                                    size={24}
                                                    color="#007AFF"
                                                />
                                                <Text
                                                    style={
                                                        styles.resultAddressLocationDynamicText
                                                    }
                                                >
                                                    {`${
                                                        client.clientInfo
                                                            .address.area
                                                            ? client.clientInfo
                                                                  .address.area
                                                                  .areaName
                                                            : ``
                                                    }`}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                    </View>
                    <View
                        style={{
                            ...styles.resultLineBox,
                            borderBottomWidth: 0,
                        }}
                    >
                        <TouchableOpacity>
                            <Text style={styles.resultFullName}>
                                {`${item.clientInfo.firstName} ${item.clientInfo.lastName}`}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.resultLineBox}>
                        <Text style={styles.resultPhoneNumbers}>
                            +{item.clientInfo.mainContact}
                        </Text>
                        {item.clientInfo.secondContact ? (
                            <Text style={styles.resultPhoneNumbers}>
                                +{item.clientInfo.secondContact}
                            </Text>
                        ) : null}
                    </View>
                    <View
                        style={{
                            ...styles.resultLineBox,
                            borderBottomWidth: 0,
                        }}
                    >
                        <Text style={styles.resultPhoneNumbers}>
                            Yoshi: {item.clientInfo.age}
                        </Text>
                        <Text style={styles.resultPhoneNumbers}>
                            Jinsi:{" "}
                            {item.clientInfo.gender == 1 ? "Erkak" : "Ayol"}
                        </Text>
                    </View>
                </TouchableOpacity>
            ) : null}
        </>
    );
};

export default CardComponent;
