import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

import { styles } from "./styles";
import { colors } from "../../../constants/color";

const PermissionBoxComponent = () => {
    const [selected, setSelected] = useState(false);
    const selectedPermission = {
        box: {
            borderWidth: 1,
            borderColor: colors.blue,
            maxWidth: 150,
            height: 40,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            margin: 2,
            backgroundColor: colors.blue,
        },
        text: {
            color: "white",
            fontWeight: "bold",
        },
    };

    return (
        <Pressable
            style={selected ? selectedPermission.box : styles.permissionBtn}
            onPress={() => setSelected(!selected)}
        >
            <Text
                style={
                    selected ? selectedPermission.text : styles.permissionBtnTxt
                }
            >
                ModeratorModerator
            </Text>
        </Pressable>
    );
};

export default PermissionBoxComponent;
