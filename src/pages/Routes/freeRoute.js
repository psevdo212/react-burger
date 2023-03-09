import React from 'react';
import {Navigate} from "react-router-dom";
import { useSelector } from 'react-redux';

export const FreeRoute = ({children}) => {

    const isAuth = useSelector((store) => store.auth.isLogged);
    
    return (
        !isAuth ? children : <Navigate to='/'/>
    )
};



export default FreeRoute;