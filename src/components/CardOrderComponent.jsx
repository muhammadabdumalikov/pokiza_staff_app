import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";

import Collapsible from "react-native-collapsible";
import { styles } from "./styles";

export const CardOrderComponent = ({ item }) => {
    const [collapsed, setCollapsed] = useState(true);
    console.log(item);

    const toggleExpanded = () => {
        setCollapsed(!collapsed);
    };

    return (
        <View style={styles.ordersList}>
            <TouchableOpacity onPress={toggleExpanded} style={styles.orderBox}>
                <View style={styles.orderBoxContent}>
                    <View style={styles.orderNumber}>
                        <Text style={styles.orderNumberStyle}>
                            {item.productCount} dona{" "}
                            <Text style={styles.productNameStyle}>
                                {item.productName}
                            </Text>
                        </Text>
                        <Text>
                            O'lcham:
                            <Text style={styles.orderNumberStyle}>
                                {" "}
                                {item.productSize} m.kv
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.orderNumber}>
                        <Text style={styles.orderNumberStyle}>
                            Jami: {item.productPrice}{" "}
                            <Text style={{ fontSize: 12 }}>sum</Text>
                        </Text>
                        <Text style={styles.finishedProduct}>
                            1<Text style={{ color: "black" }}>/3</Text>
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        width: "100%",
                        height: 4,
                        backgroundColor: "#F8F8F8",
                    }}
                >
                    <View
                        style={{
                            height: "100%",
                            width: "33%",
                            backgroundColor: "#3DA700",
                        }}
                    ></View>
                </View>
            </TouchableOpacity>

            <Collapsible
                style={styles.hiddenContent}
                collapsed={collapsed}
                align="center"
            >
                <View
                    style={{
                        ...styles.orderDetailBox,
                    }}
                >
                    <View style={styles.orderDetailTextContent}>
                        <View style={styles.orderDetailStatusContent}>
                            <Text style={styles.statusText}>Holati:</Text>
                            <Text style={styles.status}>{"Yuvilishda"}</Text>
                            <Text style={styles.priceText}>Narxi</Text>
                        </View>
                        <View style={styles.orderDetailSizeContent}>
                            <Text style={styles.sizeText}>O'lcham:</Text>
                            <Text style={styles.size}>12 m.kv</Text>
                            <Text style={styles.priceText}>
                                {"64.000"} so'm
                            </Text>
                        </View>
                    </View>
                    <Image style={styles.orderImage} />
                </View>
            </Collapsible>
        </View>
    );
};
