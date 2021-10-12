import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        height: height,
        backgroundColor: "#fff"
    },
    firstBox: {
        height: height /3.98,
        justifyContent: "space-between",
        borderRadius: 15,
        backgroundColor: "#fff",
        overflow: "hidden",
        borderColor: "#EDEDED",
        borderWidth: 1,
        marginBottom: 16
    },
    secondBox: {
        height: height /7.96,
        justifyContent: "space-between",
        borderRadius: 15,
        backgroundColor: "#fff",
        overflow: "hidden",
        borderColor: "#EDEDED",
        borderWidth: 1,
        marginBottom: 16
    },
    menuBox: {
        flexDirection: "row",
        flexGrow: 1,
        paddingHorizontal: 16,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        borderBottomWidth: .5,
        borderBottomColor: "#EDEDED",
    },
    menuText: {
        fontSize: 17
    }
})
