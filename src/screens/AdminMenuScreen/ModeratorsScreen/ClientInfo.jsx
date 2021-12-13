import React, { useState } from "react";
import { View, Text } from "react-native";
import { Feather, Entypo, FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "../../../constants/color";
import formatPhoneNumber from "../../../components/phoneNumberFormat";

const ClientInfo = ({ route }) => {
    let client = route.params.client;
    console.log(client);
    return (
        <View style={{ ...styles.container, paddingHorizontal: 16 }}>
            <View style={styles.clientIdLine}>
                <Text style={styles.clientIdLineText}>
                    Mijoz - {client.clientId}
                </Text>
                <Feather name="edit" size={24} color={colors.likeBlack} />
            </View>

            <Text
                style={styles.clientFullname}
            >{`${client.clientInfo.firstName} ${client.clientInfo.lastName}`}</Text>

            <View style={styles.clientAddress}>
                <View style={styles.resultAddress}>
                    <Text style={styles.resultAddressText}>Manzil: </Text>
                    <Text style={styles.resultAddressDynamicText}>
                        {`${
                            client.clientInfo.address.state
                                ? client.clientInfo.address.state.stateName +
                                  ` viloyati,`
                                : ``
                        } ${
                            client.clientInfo.address.region
                                ? client.clientInfo.address.region.regionName +
                                  ` tumani,`
                                : ``
                        } ${
                            client.clientInfo.address.neighborhood
                                ? client.clientInfo.address.neighborhood
                                      .neighborhoodName + ` M.F.Y,`
                                : ``
                        } ${
                            client.clientInfo.address.street
                                ? client.clientInfo.address.street.streetName +
                                  ` ko'chasi,`
                                : ``
                        } ${
                            client.clientInfo.address.homeNumber
                                ? client.clientInfo.address.homeNumber + `-uy,`
                                : ``
                        }`}
                    </Text>
                </View>
                <View style={styles.resultAddressLocation}>
                    <Entypo name="location-pin" size={24} color="#007AFF" />
                    <Text style={styles.resultAddressLocationDynamicText}>
                        {`${client.clientInfo.address.area ? client.clientInfo.address.area.areaName : ``}`}
                    </Text>
                </View>
            </View>

            <View style={styles.clientPhonesWrapper}>
                <Text style={styles.resultAddressText}>Telefon raqamlar:</Text>
                <View style={styles.clientPhone}>
                    <FontAwesome name="phone" size={24} color={colors.green} />
                    <Text style={styles.clientPhoneTxt}>
                        {formatPhoneNumber(client.clientInfo.mainContact)}
                    </Text>
                </View>
                {client.clientInfo.secondContact ? (
                    <View style={styles.clientPhone}>
                        <FontAwesome
                            name="phone"
                            size={24}
                            color={colors.green}
                        />
                        <Text style={styles.clientPhoneTxt}>
                            {formatPhoneNumber(client.clientInfo.secondContact)}
                        </Text>
                    </View>
                ) : null}
            </View>
        </View>
    );
};

export default ClientInfo;
