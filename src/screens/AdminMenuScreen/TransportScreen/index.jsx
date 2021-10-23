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
import DamasSvg from "../../../../assets/svg/damas";
import { request } from "../../../helpers/request";
import { AuthContext } from "../../../navigation/AuthProvider";
import { useQuery, gql } from "@apollo/client";

let QUERY = `
{
    transports{
      transportId
      transportModel
      transportNumber
    }
  }
`;

const TransportScreen = ({ navigation }) => {
    const { userToken } = useContext(AuthContext);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        let downloadData = await request(QUERY, null, userToken);
        setData(downloadData.transports);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.resultBox}
                onPress={() => navigation.navigate("TransportDetailScreen")}
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
                        <Text style={styles.carModelText}>{item.transportModel}</Text>
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
                {loading && <ActivityIndicator size="large" color="red" />}
                {data && (
                    <FlatList
                        data={data}
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
