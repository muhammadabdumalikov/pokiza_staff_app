import { StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get("window").height
const width = Dimensions.get("window").width

const styles = StyleSheet.create({
    container: {
       flex: 1,
       height: height,
       width: width 
    },
    logoBox: {
        height: "45%",
        width: "100%",
        backgroundColor: "gray"
    },
})