import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../constants/color";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        height: height / 4.5,
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
    hideButtonText: {
        fontSize: 16,
        color: "#E50000",
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
    scrollBox: {  
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingTop: 10
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    resultLineBox: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        backgroundColor: "white",
        borderBottomWidth: 1,
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
    resultAddressText: {
        fontWeight: "bold",
        fontSize: 16,
    },
    locationStyle: {
        padding: 2,
        borderWidth: 1,
        borderColor: colors.lightGray,
        borderRadius: 10,
    },
    resultFullName: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    resultPhoneNumbers: {
        flex: 1,
        fontSize: 16,
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
    isEmpty: {
        paddingHorizontal: 15,
        borderBottomLeftRadius: 5,
        paddingVertical: 5,
        color: "white",
        backgroundColor: colors.red,
        position: "absolute",
        right: 0,
        top: 0
    },
    resultDetailBox: {
        flex: 3,
        padding: 14,
    },
    resultDetailLine: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    transportDateInfo:{ 
        color: colors.gray
    },
    carModelText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    carNumberText: {
        fontSize: 14,
        color: colors.blue,
    },
    textStyle: {
        fontSize: 16
    },
    waitingText: {
        color: "#007AFF",
        fontSize: 16
    },
    readyText: {
        color: "#4BCE00",
        fontSize: 16
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