import React, { useState } from "react";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { Platform, StyleSheet, View, Text, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Slider = () => {
    const [multiSliderValue, setMultiSliderValue] = useState([16, 99]);

    const multiSliderValuesChange = (values) => setMultiSliderValue(values);

    return (
        <View style={styles.viewContainer}>
            <View style={styles.sliderWrapper}>
                <View style={styles.labelWrapper}>
                    <Text style={styles.labelText}>{multiSliderValue[0]} </Text>
                    <MultiSlider
                        markerStyle={{
                            ...Platform.select({
                                ios: {
                                    height: 20,
                                    width: 20,
                                    shadowColor: "#000000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 3,
                                    },
                                    shadowRadius: 1,
                                    shadowOpacity: 0.1,
                                },
                                android: {
                                    height: 20,
                                    width: 20,
                                    borderRadius: 50,
                                    backgroundColor: "#1792E8",
                                },
                            }),
                        }}
                        pressedMarkerStyle={{
                            ...Platform.select({
                                android: {
                                    height: 30,
                                    width: 30,
                                    borderRadius: 20,
                                    backgroundColor: "#148ADC",
                                },
                            }),
                        }}
                        selectedStyle={{
                            backgroundColor: "#1792E8",
                        }}
                        trackStyle={{
                            backgroundColor: "#CECECE",
                        }}
                        touchDimensions={{
                            height: 20,
                            width: 20,
                            borderRadius: 10,
                            slipDisplacement: 40,
                        }}
                        values={[multiSliderValue[0], multiSliderValue[1]]}
                        sliderLength={280}
                        onValuesChange={multiSliderValuesChange}
                        min={16}
                        max={99}
                        allowOverlap={false}
                        minMarkerOverlapDistance={10}
                    />
                    <Text style={styles.labelText}>{multiSliderValue[1]}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    sliderWrapper: {
        width: "100%",
        height: height / 18.45,
        justifyContent: "center",
        backgroundColor: "#fff",
        marginBottom: 16
    },
    viewContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    labelWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
    },
    labelText: {
        fontSize: 18,
    },
});

export default Slider;
