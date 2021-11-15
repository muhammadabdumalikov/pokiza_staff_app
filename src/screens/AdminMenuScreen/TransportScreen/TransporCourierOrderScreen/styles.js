import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 16,
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    name: {
        flex: 1,
    },
    phones: {
        flex: 1,
    },
    address: {
        flex: 2,
    },
    comment: {
        flex: 2,
    },
    call: {
        flex: 1,
    },
    add: {
        flex: 1,
    },
});
