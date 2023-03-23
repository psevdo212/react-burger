import React, { FC } from 'react';
import {Navigate} from "react-router-dom";
import { JsxElement } from 'typescript';
import { useAppSelector } from '../../hooks/storeHooks';

type TFreeRoute = {
    children: JSX.Element,
}

export const FreeRoute: FC<TFreeRoute> = ({children}) => {

    const isAuth: boolean = useAppSelector((store) => store.auth.isLogged);
    
    return (
        !isAuth ? children : <Navigate to='/'/>
    )
};



export default FreeRoute;