import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: "100%",
    },
    filterBox: {
        height: height / 20,
        right: 0,
        width: width / 5,
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "500",
    },
    hiddenContent: {
        height: height / 1.57,
        backgroundColor: "#F5F5F5",
    },
    picker: {
        height: height /15,
        width: "100%",
        marginBottom: 16,
        backgroundColor: "#fff",
    },
    inputContainer: {
        width: "100%",
        height: height / 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingHorizontal: 16,
    },
    preTextWrapperStyle: {
        height: "100%",
        justifyContent: "center",
        width: width * 0.3,
    },
    preText: {
        fontSize: 16,
    },
    input: {
        width: "100%",
        height: "100%",
        flex: 1,
        fontSize: 16,
        color: "#666",
    },
    addressWrapper: {
        height: height / 13.53
    },
    active: {
        backgroundColor: "rgba(255,255,255,1)",
    },
    inactive: {
        backgroundColor: "rgba(245,252,255,1)",
    },
});
