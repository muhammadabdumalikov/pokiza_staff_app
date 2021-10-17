import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: "100%",
    },
    contentStyle: {
        alignItems: "center",
    },
    dateAndTransport: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        backgroundColor: "white",
    },
    transportName: {
        color: "#007AFF"
    },
    sumLine: {
        width: "100%",
        height: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
    },
    sumText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "black",
    },
    sumNum: {
        fontSize: 18,
        color: "#007AFF",
        fontWeight: "bold",
    },
    outOfTurn: {
        color: "#E50000",
        fontWeight: "bold",
        fontSize: 18,
    },
    ordersList: {
        marginBottom: 16,
        borderRadius: 10,
    },
    orderBox: {
        height: height / 7.96,
        width: width / 1.09,
        borderRadius: 10,
        justifyContent: "space-around",
        marginBottom: 16,
        backgroundColor: "white",
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
    orderDetailBox: {
        flexDirection: "row",
        width: width / 1.09,
        height: height / 9.12,
        backgroundColor: "white",
        borderRadius: 10,
        // borderWidth: .2,
        overflow: "hidden",
        marginBottom: 8
    },
    orderDetailTextContent: {
        width: (width / 1.09) - (width/4.21),
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
        fontWeight: "bold"
    },
    status: {
        fontSize: 18,
        fontWeight: "bold"
    },
    orderDetailSizeContent: {
        justifyContent: "space-around",
    },
    sizeText: {
        fontSize: 14,
        fontWeight: "bold"
    },
    size: {
        fontSize: 18,
        fontWeight: "bold"
    },
    orderImage: {
        width: width / 4.21,
        height: "100%",
        backgroundColor: "gray"
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
