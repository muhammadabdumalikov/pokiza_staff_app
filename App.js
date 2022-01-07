import React, { useEffect, useMemo, useState } from "react";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from 'expo-font';

import Providers from "./src/navigation";

const httpLink = createHttpLink({
    uri: "https://pokiza.herokuapp.com/graphql",
});

const authLink = setContext(async (_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = await AsyncStorage.getItem("user_token");
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            token: token ? `${token}` : "",
        },
    };
});

// Initialize Apollo Client
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default function App() {
    const [loaded] = useFonts({
        RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    });

    if (!loaded) {
        return null;
    }
   
    return (
        <ApolloProvider client={client}>
            <Providers />
        </ApolloProvider>
    );
}
