import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    dateWrapper: {
        width: width,
        flexDirection: "row",
        backgroundColor: "white",
        padding: 16,
    },
    dateText: {
        fontSize: 18,
    },
    dateDynamicText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    scrollBox: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 16,
    },
    scrollContentContainer: {},
    resultBox: {
        height: height / 7.18,
        flexDirection: "row",
        borderColor: "#EDEDED",
        borderWidth: 1,
        overflow: "hidden",
        borderRadius: 10,
        marginBottom: 16,
    },
    resultImageBox: {
        flex: 2,
        backgroundColor: "#F5F5F5",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    resultDetailBox: {
        flex: 3,
        padding: 14,
    },
    resultDetailLine: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        fontSize: 14,
    },
    carModelText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    carNumberText: {
        fontSize: 14,
        color: "#E50000",
    },
    waitingText: {
        color: "#007AFF",
    },
    readyText: {
        color: "#4BCE00",
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
