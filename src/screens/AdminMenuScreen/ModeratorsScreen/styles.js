import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../constants/color";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        height: "100%",
    },
    contentStyle: {
        paddingTop: 16,
        paddingBottom: 100,
    },
    filterBox: {
        height: height / 20,
        paddingHorizontal: 16,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "500",
    },
    hiddenContent: {
        height: height / 3.2,
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
    addressPlaceholder: {
        fontSize: 14,
        color: "#A5A5A8",
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
        height: height / 3.18,
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
        borderBottomWidth: 0.9,
        borderBottomColor: "#EDEDED",
    },
    resultId: {
        flexDirection: "row",
        width: "40%",
        justifyContent: "space-between",
    },
    resultIdText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    resultFullName: {
        // flex: 1,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
    resultPhoneNumbers: {
        flex: 1,

        textAlign: "left",
        fontSize: 16,
    },
    tariffText: {
        flex: 1,
        fontSize: 16,
    },
    tariffDynamicText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    acceptBox: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRightColor: colors.gray,
        borderRightWidth: 1,
    },
    acceptText: {
        color: "rgb(75,206,0)",
    },
    deleteBox: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    locationStyle: {
        padding: 2,
        borderWidth: 1,
        borderColor: colors.lightGray,
        borderRadius: 10,
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
    clientIdLine: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        marginVertical: 20
    },
    clientIdLineText: {
        fontSize: 22,
        fontWeight: "bold",
    },
    clientFullname: {
        marginVertical: 10,
        fontSize: 18
    },
    clientAddress: {
        height: 120,
        borderBottomColor: colors.gray,
        borderBottomWidth: 1,
        marginVertical: 1,
        marginBottom: 20
    },
    resultAddress: {
        flex: 1,
        justifyContent: "flex-start",
    },
    resultAddressText: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10
    },
    resultAddressDynamicText: {
        width: "60%",
        fontSize: 13,
    },
    resultAddressLocation: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    resultAddressLocationDynamicText: {
        fontSize: 14,
        fontWeight: "bold",
    },
    clientPhonesWrapper: {
        width: "70%",
    },
    clientPhone: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        marginVertical: 5
    },
    clientPhoneTxt: {
        fontSize: 22,
        textAlign: "left"
    }
});
