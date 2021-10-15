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
        color: "#007AFF"
    },
    orderBox: {
        height: height / 7.96,
        width: width / 1.09,
        borderRadius: 10,
        justifyContent: "space-around",
        marginBottom: 16,
        backgroundColor: "#ECFAE5",
        overflow: "hidden",
    },
    orderBoxContent: {
        paddingHorizontal: 24,
        paddingVertical: 14,
        height: "100%",
        justifyContent: "space-around",
    },
    orderNumber: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    orderNumberStyle: {
        fontWeight: "bold",
        fontSize: 18,
    },
    productNameStyle: {
        color: "#007AFF",
    },
    finishedProduct: {
        color: "#3DA700",
        fontWeight: "bold",
        fontSize: 18,
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
