import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const sliderStyles = StyleSheet.create({
    sliderWrapper: {
        width: "100%",
        height: height / 18.45,
        justifyContent: "center",
        backgroundColor: "#fff",
        marginBottom: 16,
    },
    viewContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    labelWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
    },
    labelText: {
        fontSize: 18,
    },
});

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        height: "100%",
    },
    contentStyle: {
        paddingVertical: 16,
    },
    filterBox: {
        height: height / 20,
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
    content: {},
    picker: {
        flex: 1,
        height: "100%",
        backgroundColor: "#eee",
        color: "#B8B8BB",
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
        flex: 1,
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
    pickerWrapper: {
        height: height / 15,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    resetWrapper: {
        height: height / 15,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingHorizontal: 16,
    },
    resetText: {
        fontSize: 16,
        color: "#E50000",
    },
    hideButtonWrapper: {
        height: height / 15,
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingHorizontal: 16,
    },
    hideButtonText: {
        fontSize: 16,
        color: "#E50000",
    },
    divider: {
        borderBottomColor: "black",
        borderBottomWidth: 0.9,
        marginHorizontal: 16,
        marginVertical: 24,
    },
    resultBox: {
        height: height / 3.98,
        backgroundColor: "gray",
        borderRadius: 15,
        marginHorizontal: 16,
        marginBottom: 16,
        borderColor: "#EDEDED",
        borderWidth: 1,
        overflow: "hidden",
    },
    resultLineBox: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        backgroundColor: "white",
        borderBottomWidth: 0.5,
        borderBottomColor: "#EDEDED",
    },
    resultId: {
        flexDirection: "row",
        width: "30%",
        justifyContent: "space-between",
    },
    resultIdText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    resultFullName: {
        flex: 1,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
    resultPhoneNumbers: {
        flex: 1,
        textAlign: "center",
        fontSize: 16,
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
