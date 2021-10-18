import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 24
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
        paddingHorizontal: 15
    }
});
