import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export const styles = StyleSheet.create({
    container: {
        flex: 1
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
})