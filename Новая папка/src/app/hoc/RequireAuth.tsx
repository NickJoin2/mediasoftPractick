// import {Navigate, Outlet, useLocation} from 'react-router-dom';
// import {jwtDecode} from "jwt-decode";
//
// interface auth {
//     sub: string;
//     name: string;
//     role: string[]
// }
//
// const RequireAuth: React.FC<{ rolesToCheck?: string[] }> = ({rolesToCheck = []}) => {
//     const token = localStorage.getItem("token");
//     const location = useLocation();
//
//     let auth: auth
//     if (token) {
//         auth = jwtDecode(token)
//     }
//
//
//     if (!token) return <Navigate to="/" state={{from: location}} replace/>
//
//     return (rolesToCheck.some(role => auth?.role.includes(role))
//             ? <Outlet/>
//             : <Navigate to="/" state={{from: location}} replace/> && console.log('Права доступа отсутствуют')
//     )
// };
//
// export default RequireAuth;

import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

interface Auth {
    sub: string;
    name: string;
    role: string[];
}

const RequireAuth: React.FC<{ rolesToCheck?: string[] }> = ({ rolesToCheck = [] }) => {
    const token = localStorage.getItem("token");
    const location = useLocation();

    let auth: Auth | null = null;
    if (token) {
        auth = jwtDecode(token);
    }

    if (!token) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    if (!rolesToCheck.some(role => auth?.role.includes(role))) {
        console.log('Права доступа отсутствуют');
       return <Navigate to={'/'} state={{ from: location }} replace />
    }

    return <Outlet />;
};

export default RequireAuth;