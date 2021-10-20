import React from "react";
import { AppRegistry } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Providers from "./src/navigation";

// Initialize Apollo Client
const client = new ApolloClient({
    uri: "https://pokiza.herokuapp.com/graphql",
    cache: new InMemoryCache(),
});

export default function App() {
    return (
        <ApolloProvider client={client}>
            <MyRootComponent />
        </ApolloProvider>
    );
}
