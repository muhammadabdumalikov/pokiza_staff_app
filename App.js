import React, { useEffect, useMemo, useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Providers from "./src/navigation";
import getEnvVars from './config';

// Initialize Apollo Client
const client = new ApolloClient({
    uri: "https://pokiza.herokuapp.com/graphql",
    cache: new InMemoryCache(),
});

export default function App() {
    return (
        <ApolloProvider client={client}>
            <Providers />
        </ApolloProvider>
    );
}
