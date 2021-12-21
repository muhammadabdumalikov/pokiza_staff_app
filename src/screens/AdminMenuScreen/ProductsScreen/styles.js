import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../constants/color";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
    },
    contentStyle: {
        paddingTop: 16,
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
        textAlign: "center"
    },
    filterItem2: {
        flex: 1,
        textAlign: "right"
    },
    headerText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
    hiddenContent: {
        height: height/1.9,
        backgroundColor: "#F5F5F5",
    },
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
        alignItems: "center",
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    datePicker: {
        flex: 1,
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
        alignItems: "center",
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
    timeText: {
        flex: 1,
        fontSize: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    timeDynamicText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    timeStatus: {
        width: width / 3.4,
        height: height / 25.37,
        textAlign: "center",
        textAlignVertical: "center",
        borderRadius: 5,
        fontSize: 12,
        fontWeight: "bold",
        color: "gray",
        backgroundColor: "#F5F5F5",
    },
    productNameText: {
        color: "#007AFF",
        fontWeight: "bold",
    },
    acceptBox: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    acceptText: {
        color: "rgb(75,206,0)",
    },
    cardIcon: {
        padding: 3,
        borderColor: colors.lightGray,
        borderWidth: 1,
        borderRadius: 3
    },
    deleteBox: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
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
    stickOrder: {
        width: "80%",
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        position: "absolute",
        bottom: 28,
        backgroundColor: "#007AFF", 
    },
    stickOrderTxt: {
        color: "white",
        fontSize: 17
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalWrapper: {
        width: "90%",
        height: "55%",
        backgroundColor: "white",
        borderRadius: 10,
    },
    modalFB: {
        flex: 3,
        padding: 15,
        justifyContent: "space-around",
        borderBottomColor: colors.lightGray,
        borderBottomWidth: 1
    },
    carMod: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    carModTxt: {
        fontSize: 20,
        color: colors.blue,
        fontWeight: "bold"
    },
    modalTxt: {
        fontSize: 17
    },
    modalTimeTxt: {
        color: colors.gray
    },
    modalSB: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modalSBTxt: {
        color: colors.blue,
        fontSize: 16,
        fontWeight: "bold"
    }
});
