import React, { FC, ReactElement, ReactNode } from "react";
import { Navigate, NavigateFunction, useNavigate } from "react-router-dom";
import { JsxElement } from "typescript";
import { useAppSelector } from "../../hooks/storeHooks";

type TFreeRoute = {
  children: ReactNode;
};

export const FreeRoute: FC<TFreeRoute> = ({ children }) => {
  const isAuth = useAppSelector((store) => store.auth.isLogged);
  
  return !isAuth ? (children as ReactElement) : <Navigate to="/" />;
};

export default FreeRoute;
