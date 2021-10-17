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
        minHeight: height / 2.4,
        padding: 24,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#EDEDED",
        backgroundColor: "#fff",
        overflow: "hidden",
        marginBottom: 16
    },
    topBox: {
        height: height/3.62
    },
    bottomBox: {
        borderTopColor: "gray",
        borderTopWidth: 1,
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
    totalSumTextWrapper: {
        marginVertical: 10
    },
    totalSumText: {
        fontSize: 14,
        fontWeight: "bold"
    },
    totalSumDynamicText: {
        fontSize: 16,
        color: "#007AFF"
    },
    productDetailsWrapper: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
    },
    productText: {
        width: "50%",
        fontSize: 14,
        fontWeight: "bold",
    },
    productDynamicText: {
        color: "#007AFF"
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
