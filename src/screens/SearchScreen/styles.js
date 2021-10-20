import { StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get("window").height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    searchBoxWrapper: {
        height: height / 22.55,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#E5E5E7",
        borderRadius: 10,
        padding: 15
    },
    searchBox: {
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    searchBtn: {
        paddingRight: 5,
        height: "80%",
        justifyContent: "center",
        alignItems: "center",
    }
})

export default styles;