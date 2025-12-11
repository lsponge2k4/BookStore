// AdminContext.jsx
import { createContext, useContext, useState } from "react";
import { } from "../api/admin";

const AdminContext = createContext();

export function AdminProvider({ children }) {


    return (
        <AdminContext.Provider value={{

        }}>
            {children}
        </AdminContext.Provider>
    );
}

export const useAdmin = () => useContext(AdminContext);
