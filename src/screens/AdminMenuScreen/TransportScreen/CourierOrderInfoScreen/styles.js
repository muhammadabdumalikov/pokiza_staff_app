import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../../constants/color";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
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
        borderWidth: 1,
        borderColor: colors.lightGray,
        borderRadius: 5,
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
        borderRadius: 15,
        borderWidth: 1,
        borderColor: colors.lightGray,
    },
    inputContainer: {
        height: "25%",
        flexDirection: "row",
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
    },
    sizeText: {
        flex: 1,
    },
    sizeInput: {
        flex: 1,
    },
    cameraBox: {
        flex: 1
    },
    camera: {
        flex: 4,
    },
    cameraOptions: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "black"
    },
    cameraOption: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 35,
        height: 70,
        width: 70,
        padding: 10,
        backgroundColor: colors.lightGray
    },
    shot: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        height: 60,
        width: 60,
        backgroundColor: "white" 
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: "row",
        margin: 20,
    },
    button: {
        flex: 0.1,
        alignSelf: "flex-end",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        color: "white",
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
        color: colors.gray,
        textAlign: "center",
    },
    modalText: {
        textAlign: "center",
    },
    hideModalButton: {
        color: "white",
    },
});
