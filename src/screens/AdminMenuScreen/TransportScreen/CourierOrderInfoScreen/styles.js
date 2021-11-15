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
});
