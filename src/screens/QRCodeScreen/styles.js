import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        backgroundColor: "#fff",
        padding: 24
    },
    content: {
        alignItems: "center",
        justifyContent: "center",
    },
    maintext: {
        fontSize: 16,
        margin: 20,
    },
    barcodebox: {
        alignItems: "center",
        justifyContent: "center",
        height: 200,
        width: 200,
        overflow: "hidden",
        borderRadius: 30,
        marginBottom: 64
    },
    qrcodeinput: {
        width: "100%",
        height: height/14.7,
        backgroundColor: "#F5F5F5",
        borderRadius: 10,
        paddingHorizontal: 20,
        marginBottom: 50
    },
    accepted: {
        width: "100%",
        height: height/16.2,
        backgroundColor: "#007AFF",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50
    },
    acceptedText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    }
});
