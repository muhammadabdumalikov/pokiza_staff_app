import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../../constants/color";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        height: "100%"
    },
    contentStyle: {
        padding: 16,
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    name: {
        height: height/12,
        borderBottomColor: colors.lightGray,
        borderBottomWidth: .5
    },
    phones: {
        height: height/12,
        borderBottomColor: colors.lightGray,
        borderBottomWidth: .5
    },
    address: {
        height: height/6,
        borderBottomColor: colors.lightGray,
        alignItems: "center",
        borderBottomWidth: 1
    },
    addressInfo: {
        color: colors.gray
    },
    comment: {
        height: height/6,
        paddingTop: 15,
    },
    txtInput: {
        borderBottomColor: colors.lightGray,
        borderBottomWidth: .5,
        marginTop: 5
    },
    call: {
        height: height/15,
        width: "100%",
        borderColor: colors.green,
        borderWidth: 1,
        borderRadius: 5,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    callTxt: {
        fontSize: 16,
        color: colors.green,
        fontWeight: "bold"
    },
    addTxt: {
        fontSize: 16,
        color: "white"
    },
    add: {
        height: height/15,
        width: "100%",
        backgroundColor: colors.blue,
        borderRadius: 5,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
        marginTop: 15
    },
    fontSize: {
        fontSize: 16,
    },
});
