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
    Alert,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import BarcodeMask from "react-native-barcode-mask";

import { styles } from "./styles";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const QRCodeScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState("Not yet scanned");
    const [qrcode, setqrcode] = useState();

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setText(data);
    };

    const callAlert = () => {
        Alert.alert(
            "Do you want to Accepted this deal?",
            "",
            [
                {
                    text: "Cancel",
                    onPress: () => setScanned(false),
                    style: "cancel",
                },
                {
                    text: "Yes, Check deal",
                    onPress: () => setqrcode(text),
                },
            ],
            { cancelable: false }
        );
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
        >
            <View style={styles.barcodebox}>
                <BarCodeScanner
                    onBarCodeScanned={
                        scanned ? undefined : handleBarCodeScanned
                    }
                    style={{ height: 400, width: 400 }}
                />
            </View>

            <TextInput style={styles.qrcodeinput} placeholder={text} />

            {scanned && (
                <TouchableOpacity
                    onPress={() => {
                        setScanned(false);
                        setText("Not yet scanned")
                    }}
                    style={styles.accepted}
                >
                    <Text style={styles.acceptedText}>Scan again</Text>
                </TouchableOpacity>
            )}

            <TouchableOpacity
                onPress={() => {
                    callAlert();
                }}
                style={styles.accepted}
            >
                <Text style={styles.acceptedText}>Accepted</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default QRCodeScreen;
