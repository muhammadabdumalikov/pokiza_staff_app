import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../constants/color";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    productId: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        paddingBottom: 5
    },
    container: {
        flex: 1,
        backgroundColor: "white",
        height: "100%",
    },
    contentStyle: {
        padding: 16,
    },
    pickerWrapper: {
        height: height / 15,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGray,
        paddingHorizontal: 16,
        marginBottom: 16,
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
    prductInfo: {
        height: height / 3,
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGray,
        marginBottom: 16,
    },
    inputContainer: {
        height: "25%",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGray,
    },
    productSize: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    infoLine: {
        height: "25%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGray,
    },
    sizeText: {
        flex: 1,
    },
    sizeInput: {
        flex: 1,
    },
    cameraBox: {
        flex: 1,
    },
    camera: {
        flex: 5,
    },
    cameraOptions: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "black",
    },
    cameraOption: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 35,
        height: 70,
        width: 70,
        padding: 10,
        backgroundColor: colors.white,
    },
    shot: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        height: 60,
        width: 60,
        backgroundColor: colors.blue,
    },
    photoBox: {
        height: height / 3,
        padding: 10,
        marginBottom: 16,
    },
    cameraBtn: {
        flex: 1,
        backgroundColor: colors.lightGray,
        justifyContent: "center",
        alignItems: "center",
    },
    comment: {
        height: height / 6,
        paddingTop: 15,
    },
    txtInput: {
        borderBottomColor: colors.lightGray,
        borderBottomWidth: 0.5,
        marginTop: 5,
    },
    fontSize: {
        fontSize: 16,
    },
    reset: {
        height: height / 15,
        width: "100%",
        backgroundColor: colors.blue,
        borderRadius: 5,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    resetTxt: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
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
    genderModalWrapper: {
        height: "15%",
    },
    contenModalView: {
        flex: 1,
        height: "100%",
        backgroundColor: "white"
    },
    modalView: {
        padding: 16,
        alignItems: "center",
        backgroundColor: "white"
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
        color: colors.gray,
        textAlign: "center",
    },
    modalText: {
        textAlign: "center",
    },
    hideModalButton: {
        color: "white",
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
