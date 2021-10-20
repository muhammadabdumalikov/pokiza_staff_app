import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";

const SearchScreen = () => {
    const [searchBtnVisible, setSearchBtnVisible] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.searchBoxWrapper}>
                <View style={styles.searchBox}>
                    <Feather name="search" size={18} color="black" style={{marginRight: 5}} />
                    <TextInput
                        placeholder="Search"
                        onFocus={() => setSearchBtnVisible(true)}
                    />
                </View>
                {searchBtnVisible ? (
                    <TouchableOpacity style={styles.searchBtn} onPress={()=>setSearchBtnVisible(false)}>
                        <Feather name="x-circle" size={18} color="black" />
                    </TouchableOpacity>
                ) : null}
            </View>
            <Text>This screen unsupported now</Text>
        </View>
    );
};

export default SearchScreen;
