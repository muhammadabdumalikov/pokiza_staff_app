import { StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: width,
    },
    logoBox: {
        height: "40%",
        width: "100%",
        backgroundColor: "gray",
    },
    formBox: {
        padding: 16,
    },
    inputBox: {
        height: height / 18,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "gray",
        borderBottomWidth: 0.5,
    },
    inputText: {
        width: "25%",
        height: "100%",
        textAlignVertical: "center",
        fontSize: 17
    },
    input: {
        width: "75%",
        height: "100%",
        fontSize: 17
    },
    btn: {
        height: 30,
        width: 60,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default styles;
