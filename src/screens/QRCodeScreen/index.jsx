import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    StyleSheet,
    Button,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    TextInput,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import BarcodeMask from "react-native-barcode-mask";

import { styles } from "./styles";

const finderWidth = width;
const finderHeight = height;
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const viewMinX = width - finderWidth;
const viewMinY = 400;

const QRCodeScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState("Not yet scanned");

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setText(data);
        console.log("Type: " + type + "\nData: " + data);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <View style={styles.barcodebox}>
                <BarCodeScanner
                    onBarCodeScanned={
                        scanned ? undefined : handleBarCodeScanned
                    }
                    style={{ height: 400, width: 400 }}
                />
            </View>

            <TextInput style={styles.qrcodeinput} placeholder={text}/>

            {scanned && (
                <TouchableOpacity
                    onPress={() => setScanned(false)}
                    style={styles.accepted}
                >
                    <Text style={styles.acceptedText}>Accepted</Text>
                </TouchableOpacity>
            )}
        </ScrollView>
    );
};

export default QRCodeScreen;
