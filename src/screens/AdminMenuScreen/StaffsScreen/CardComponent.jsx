import React, { useState } from "react";
import { View, TouchableOpacity, Text, Dimensions, Modal } from "react-native";
import { Entypo, Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { colors } from "../../../constants/color";
import { styles } from "./styles";

const height = Dimensions.get("window").height;

function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
        return ele != value;
    });
}

const CardComponent = ({ item, elements, setElements }) => {
    const navigation = useNavigation()
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

    return (
        <>
            {item.staffInfo ? (
                <TouchableOpacity
                    style={
                        selected
                            ? {
                                  height: height / 3.98,
                                  backgroundColor: "gray",
                                  borderRadius: 15,
                                  marginBottom: 16,
                                  borderColor: colors.blue,
                                  borderWidth: 1.5,
                                  overflow: "hidden",
                              }
                            : {
                                  height: height / 3.98,
                                  backgroundColor: "gray",
                                  borderRadius: 15,
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
                                    if (elements.includes(item.staffId)) {
                                        elements = arrayRemove(
                                            elements,
                                            item.staffId
                                        );
                                        setElements([...elements]);
                                        return;
                                    }
                                    elements.push(item.staffId);
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

                            <TouchableOpacity style={styles.staffIdWrapper}>
                                <Text style={styles.staffId}>Jamoa ID:</Text>
                                <Text style={styles.resultIdText}>
                                    {` ${item.staffId}`}
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
                            {/* <Modal
                                transparent={true}
                                animationType="slide"
                                visible={locationModalVsible}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.deleteModalWrapper}>
                                        <View style={styles.deleteModalContent}>
                                            <View style={styles.clientAddress}>
                                                <View
                                                    style={styles.resultAddress}
                                                >
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
                                                        <Entypo
                                                            name="location-pin"
                                                            size={24}
                                                            color="#007AFF"
                                                        />
                                                        {`${
                                                            client.clientInfo
                                                                .address.state
                                                                ? client
                                                                      .clientInfo
                                                                      .address
                                                                      .state
                                                                      .stateName +
                                                                  ` viloyati,`
                                                                : ``
                                                        } ${
                                                            client.clientInfo
                                                                .address.region
                                                                ? client
                                                                      .clientInfo
                                                                      .address
                                                                      .region
                                                                      .regionName +
                                                                  ` tumani,`
                                                                : ``
                                                        } ${
                                                            client.clientInfo
                                                                .address
                                                                .neighborhood
                                                                ? client
                                                                      .clientInfo
                                                                      .address
                                                                      .neighborhood
                                                                      .neighborhoodName +
                                                                  ` M.F.Y,`
                                                                : ``
                                                        } ${
                                                            client.clientInfo
                                                                .address.street
                                                                ? client
                                                                      .clientInfo
                                                                      .address
                                                                      .street
                                                                      .streetName +
                                                                  ` ko'chasi,`
                                                                : ``
                                                        } ${
                                                            client.clientInfo
                                                                .address
                                                                .homeNumber
                                                                ? client
                                                                      .clientInfo
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
                                                    <Text
                                                        style={
                                                            styles.resultAddressLocationDynamicText
                                                        }
                                                    >
                                                        {`${
                                                            client.clientInfo
                                                                .address.area
                                                                ? client
                                                                      .clientInfo
                                                                      .address
                                                                      .area
                                                                      .areaName
                                                                : ``
                                                        }`}
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={styles.okBtn}>
                                                <TouchableOpacity
                                                    style={
                                                        styles.cancelModalBtn
                                                    }
                                                    onPress={() =>
                                                        setLocationModalVisible(
                                                            false
                                                        )
                                                    }
                                                >
                                                    <Text
                                                        style={
                                                            styles.cancelModalBtn
                                                        }
                                                    >
                                                        OK
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </Modal> */}
                        </View>
                    </View>
                    <View
                        style={{
                            ...styles.resultLineBox,
                            borderBottomWidth: 0,
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("StaffIndex", {
                                    staffId: item.staffId,
                                });
                            }}
                        >
                            <Text style={styles.resultFullName}>
                                {`${item.staffInfo.firstName} ${item.staffInfo.lastName}`}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.resultLineBox}>
                        <Text style={styles.resultPhoneNumbers}>
                            +{item.staffInfo.mainContact}
                        </Text>
                        {item.staffInfo.secondContact ? (
                            <Text style={styles.resultPhoneNumbers}>
                                +{item.staffInfo.secondContact}
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
                            Yoshi: {`22`}
                        </Text>
                        <Text style={styles.resultPhoneNumbers}>
                            Jinsi: {`Default`}
                            {/* {item.clientInfo.gender == 1 ? "Erkak" : "Ayol"} */}
                        </Text>
                    </View>
                </TouchableOpacity>
            ) : null}
        </>
    );
};

export default CardComponent;
