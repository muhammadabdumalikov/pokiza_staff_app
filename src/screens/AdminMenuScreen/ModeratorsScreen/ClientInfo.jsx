import React, { useState } from "react";
import { View, Text } from "react-native";
import { Feather, Entypo, FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "../../../constants/color";

const ClientInfo = () => {
    return (
        <View style={{ ...styles.container, paddingHorizontal: 16 }}>
            <View style={styles.clientIdLine}>
                <Text style={styles.clientIdLineText}>Mijoz - {`1111`}</Text>
                <Feather name="edit" size={24} color={colors.likeBlack} />
            </View>

            <Text
                style={styles.clientFullname}
            >{`Muhammadaliyev Olimjon`}</Text>

            <View style={styles.clientAddress}>
                <View style={styles.resultAddress}>
                    <Text style={styles.resultAddressText}>Manzil: </Text>
                    <Text style={styles.resultAddressDynamicText}>
                        {
                            "Mirobod tumani, Rakat mahalla, Xosilot ko'chasi, 76-uy, 42-xonadon"
                        }
                    </Text>
                </View>
                <View style={styles.resultAddressLocation}>
                    <Entypo name="location-pin" size={24} color="#007AFF" />
                    <Text style={styles.resultAddressLocationDynamicText}>
                        {"Mirobod masjidi"}
                    </Text>
                </View>
            </View>

            <View style={styles.clientPhonesWrapper}>
                <Text style={styles.resultAddressText}>Telefon raqamlar:</Text>
                <View style={styles.clientPhone}>
                    <FontAwesome name="phone" size={24} color={colors.green} />
                    <Text style={styles.clientPhoneTxt}>+{`998911011010`}</Text>
                </View>
                <View style={styles.clientPhone}>
                    <FontAwesome name="phone" size={24} color={colors.green} />
                    <Text style={styles.clientPhoneTxt}>+{`998911011010`}</Text>
                </View>
            </View>
        </View>
    );
};

export default ClientInfo;
