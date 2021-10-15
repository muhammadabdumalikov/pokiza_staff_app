import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 16
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
    },
    scrollContentContainer: {
        backgroundColor: "#fff",
        height: "100%",
        padding: 16,
    },
    resultBox: {
        height: height/7.18,
        flexDirection: "row",
        borderColor: "#EDEDED",
        borderWidth: 1,
        overflow: "hidden",
        borderRadius: 10,
    },
    resultImageBox: {
        flex: 2,
        backgroundColor: "#F5F5F5"
    },
    resultDetailBox: {
        flex: 3
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
