'use client'
import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthWrapper({ children }) {
    const [globalState, SetGlobalState] = useState({
        tokens: null,
        login,
    }) 

    async function login(userInfo) {
        const url = "https://cookiesstandadmin.onrender.com"
        const res = await axios.post(url, userInfo);

        SetGlobalState({
            tokens: res.data,
            login,
        })
    }//end function login

    return (
        <AuthContext.Provider value={globalState}>
            {children}
        </AuthContext.Provider>
    )
}