import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        height: "100%",
    },
    contentStyle: {
        padding: 16,
        paddingBottom: 100,
    },
    dateAndTransport: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: "white",
    },
    transportName: {
        color: "#007AFF"
    },
    resultBox: {
        height: height / 2.4,
        padding: 14,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#EDEDED",
        backgroundColor: "#fff",
        overflow: "hidden",
        marginBottom: 16
    },
    topBox: {
        height: "66%"
    },
    bottomBox: {
        
    },
    resultName: {
        flex: 1,
    },
    resultNameText: {
        fontSize: 17,
        fontWeight: "bold"
    },
    resultOrderId: {
        flex: 1
    },
    resultOrderIdText: {
        fontSize: 17,
        fontWeight: "bold"
    },
    resultOrderIdDynamicText: {
        color: "#007AFF"
    },
    resultAddress: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    resultAddressText: {
        fontSize: 14,
        fontWeight: "bold"
    },
    resultAddressDynamicText: {
        width: "60%",
        fontSize: 12,
    },
    resultAddressLocation: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    resultAddressLocationDynamicText: {
        fontSize: 14,
        fontWeight: "bold"
    },
    resultPhoneNumbers: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    fab: {
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 28,
        left: 24,
        backgroundColor: "#007AFF",
    },
});
