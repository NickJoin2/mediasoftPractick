import React, { createContext } from 'react';

const AuthContext = createContext<any | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const token: string | null = localStorage.getItem('token');

    const values = { token };
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;