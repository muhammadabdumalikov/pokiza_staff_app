import React, { useContext, useEffect, useState } from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";
import { request } from "../../../helpers/request";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../../navigation/AuthProvider";

const TransportScreen = ({ navigation }) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [userToken, setUserToken] = useState();
    const {setTransportId} = useContext(AuthContext)

    const QUERY = `
        {
            transports{
                transportId
                transportModel
                transportNumber
            }
        }
    `;

    useEffect(() => {
        async function fetchData() {
            try {
                const value = await AsyncStorage.getItem("staff_token");
                setUserToken(value);
                setData(await request(QUERY, null, value));
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.resultBox}
                onPress={() => {
                    navigation.navigate("TransportDetailScreen");
                    setTransportId(item.transportId);
                }}
            >
                <View style={styles.resultImageBox}>
                    <Image
                        style={styles.image}
                        source={require("../../../../assets/damas.png")}
                    />
                    {/* <DamasSvg/> */}
                </View>
                <View style={styles.resultDetailBox}>
                    <View style={styles.resultDetailLine}>
                        <Text style={styles.carModelText}>
                            {item.transportModel}
                        </Text>
                        <Text style={styles.carNumberText}>
                            {item.transportNumber}
                        </Text>
                    </View>
                    <View style={styles.resultDetailLine}>
                        <Text style={styles.waitingText}>Waiting: </Text>
                        <Text>{"10"} orders</Text>
                    </View>
                    <View style={styles.resultDetailLine}>
                        <Text style={styles.readyText}>Ready: </Text>
                        <Text>{"5"} orders</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.dateWrapper}>
                <Text style={styles.dateText}>Date: </Text>
                <Text style={styles.dateDynamicText}>{"10.08.2021"}</Text>
            </View>

            <View
                style={styles.scrollBox}
                // contentContainerStyle={styles.scrollContentContainer}
            >
                {loading ? (
                    <View style={styles.loadingIndicator}>
                        <ActivityIndicator size="large" color="#007AFF" />
                    </View>
                ) : (
                    <FlatList
                        data={
                            data.transports != undefined ? data.transports : []
                        }
                        renderItem={renderItem}
                        keyExtractor={(item) => item.transportId}
                        showsVerticalScrollIndicator={false}
                    />
                )}
            </View>
            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="ios-arrow-back" size={28} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default TransportScreen;
