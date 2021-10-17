import { Dimensions, StyleSheet } from "react-native";

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
        color: "#007AFF",
    },
    orderDetailBox: {
        flexDirection: "row",
        width: width / 1.09,
        height: height / 9.12,
        backgroundColor: "white",
        borderRadius: 10,
        // borderWidth: .2,
        overflow: "hidden",
        marginBottom: 8,
    },
    orderDetailTextContent: {
        width: width / 1.09 - width / 4.21,
        flexDirection: "row",
        paddingHorizontal: 24,
        paddingVertical: 14,
        height: "100%",
        justifyContent: "space-between",
    },
    orderDetailStatusContent: {
        justifyContent: "space-around",
    },
    statusText: {
        fontSize: 14,
        fontWeight: "bold",
    },
    status: {
        fontSize: 18,
        fontWeight: "bold",
    },
    orderDetailSizeContent: {
        justifyContent: "space-around",
    },
    sizeText: {
        fontSize: 14,
        fontWeight: "bold",
    },
    size: {
        fontSize: 18,
        fontWeight: "bold",
    },
    orderImage: {
        width: width / 4.21,
        height: "100%",
        backgroundColor: "gray",
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
