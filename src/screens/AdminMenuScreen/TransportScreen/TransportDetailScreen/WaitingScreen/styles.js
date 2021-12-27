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
    filterBox: {
        height: height / 20,
        width: "100%",
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    filterIconWrapper: {
        flex: 1,
        justifyContent: "flex-start",
        flexDirection: "row",
    },
    filterItem1: {
        flex: 1,
        textAlign: "center",
    },
    filterItem2: {
        flex: 1,
        textAlign: "right",
    },
    headerText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
    hiddenContent: {
        height: height / 3.5,
        backgroundColor: "#F5F5F5",
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalWrapper: {
        width: "70%",
        height: "30%",
        shadowColor: "#000",
        borderRadius: 20,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        backgroundColor: "white",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        overflow: "hidden",
        marginBottom: 10,
    },
    contenModalView: {
        flex: 1,
        height: "100%",
    },
    modalView: {
        padding: 16,
        alignItems: "center",
    },
    buttonOpen: {
        justifyContent: "center",
        alignItems: "center",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
        height: 30,
        width: "33%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        elevation: 2,
    },
    textStyle: {
        color: "gray",
        textAlign: "center",
    },
    modalText: {
        textAlign: "center",
    },
    hideModalButton: {
        color: "white",
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
    preTextWrapperStyle: {
        flex: 1,
        height: "100%",
        justifyContent: "center",
        width: width * 0.3,
    },
    preText: {
        fontSize: 16,
    },
    resultBox: {
        height: height / 3.62,
        padding: 14,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#EDEDED",
        backgroundColor: "#fff",
        overflow: "hidden",
        marginBottom: 16
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
