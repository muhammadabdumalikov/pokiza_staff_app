import React, { createContext, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [firstName, setFirstName] = useState();
    const [transportId, setTransportId] = useState("hech");
    const [lastName, setLastName] = useState();
    const [code, setCode] = useState(null);
   
    return (
        <AuthContext.Provider
            value={{
                firstName,
                setFirstName,
                lastName,
                setLastName,
                code,
                setCode,
                transportId,
                setTransportId
            }}
        >
            <AuthContext.Consumer>{() => children}</AuthContext.Consumer>
        </AuthContext.Provider>
    );
};
