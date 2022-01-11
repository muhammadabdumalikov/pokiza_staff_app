import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { Feather, Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "./styles";
import { request } from "../../../helpers/request";
import { colors } from "../../../constants/color";
import formatPhoneNumber from "../../../components/phoneNumberFormat";

const StaffInfo = ({ navigation, route }) => {
    const [staff, setStaff] = useState();
    const [isLoading, setLoading] = useState(true);
    let staffId = route.params.staffId;

    const STAFF_QUERY = `query($staffId: ID){
        staffs(staffId: $staffId){
            staffId
            staffPhoto
            staffInfo{
            userId
            mainContact
            secondContact
            firstName
            lastName
            branch{
                branchId
                branchName
            }
            }
        }
    }`;

    useEffect(() => {
        async function fetchData() {
            try {
                const value = await AsyncStorage.getItem("staff_token");
                // setUserToken(value);
                const { staffs } = await request(
                    STAFF_QUERY,
                    { staffId: staffId },
                    value
                );
                setStaff(staffs);
                // setStaffs({
                //     data: staffs ? staffs.staffs : [],
                //     page: pageCurrent,
                // });
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            {isLoading ? (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ActivityIndicator
                        size="large"
                        color="#2196F3"
                        style={{ alignSelf: "center" }}
                    />
                </View>
            ) : (
                <View style={{ ...styles.container, paddingHorizontal: 16 }}>
                    <View style={styles.clientIdLine}>
                        <Text style={styles.clientIdLineText}>
                            Jamoa - @{staffId}
                        </Text>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("EditStaffScreen", {
                                    client: {
                                        clientId: staff[0].staffId,
                                        userId: staff[0].staffInfo.userId,
                                    },
                                })
                            }
                        >
                            <Feather
                                name="edit"
                                size={24}
                                color={colors.likeBlack}
                            />
                        </TouchableOpacity>
                    </View>

                    <Text
                        style={styles.clientFullname}
                    >{`${staff[0].staffInfo.firstName} ${staff[0].staffInfo.lastName}`}</Text>

                    {/* <View style={styles.clientAddress}>
                        <View style={styles.resultAddress}>
                            <Text style={styles.resultAddressText}>
                                Manzil:{" "}
                            </Text>
                            <Text style={styles.resultAddressDynamicText}>
                                {`${
                                    client.clientInfo.address.state
                                        ? staff[0].staffInfo.address.state
                                              .stateName + ` viloyati,`
                                        : ``
                                } ${
                                    client.clientInfo.address.region
                                        ? client.clientInfo.address.region
                                              .regionName + ` tumani,`
                                        : ``
                                } ${
                                    client.clientInfo.address.neighborhood
                                        ? client.clientInfo.address.neighborhood
                                              .neighborhoodName + ` M.F.Y,`
                                        : ``
                                } ${
                                    client.clientInfo.address.street
                                        ? client.clientInfo.address.street
                                              .streetName + ` ko'chasi,`
                                        : ``
                                } ${
                                    client.clientInfo.address.homeNumber
                                        ? client.clientInfo.address.homeNumber +
                                          `-uy,`
                                        : ``
                                }`}
                            </Text>
                        </View>
                        <View style={styles.resultAddressLocation}>
                            <Entypo
                                name="location-pin"
                                size={24}
                                color="#007AFF"
                            />
                            <Text
                                style={styles.resultAddressLocationDynamicText}
                            >
                                {`${
                                    staff[0].staffInfo.address.area
                                        ? client.clientInfo.address.area
                                              .areaName
                                        : ``
                                }`}
                            </Text>
                        </View>
                    </View> */}

                    <View style={styles.clientPhonesWrapper}>
                        <Text style={styles.resultAddressText}>
                            Telefon raqamlar:
                        </Text>
                        <View style={styles.clientPhone}>
                            <FontAwesome
                                name="phone"
                                size={24}
                                color={colors.green}
                            />
                            <Text style={styles.clientPhoneTxt}>
                                {formatPhoneNumber(
                                    staff[0].staffInfo.mainContact
                                )}
                            </Text>
                        </View>
                        {staff[0].staffInfo.secondContact ? (
                            <View style={styles.clientPhone}>
                                <FontAwesome
                                    name="phone"
                                    size={24}
                                    color={colors.green}
                                />
                                <Text style={styles.clientPhoneTxt}>
                                    {formatPhoneNumber(
                                        staff[0].staffInfo.secondContact
                                    )}
                                </Text>
                            </View>
                        ) : null}
                    </View>
                    <TouchableOpacity
                        style={styles.fab}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons
                            name="ios-arrow-back"
                            size={28}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
            )}
        </>
    );
};

export default StaffInfo;
