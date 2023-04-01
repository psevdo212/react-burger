import { TIngredient, TUserInfo, TWsOrder } from "./types";

export interface IAppHeaderProps {
  isActive: boolean;
}

export interface IBurgConstItem {
  id: string;
  ingredient: TIngredient;
}

export interface IAuthState {
  isLoading: boolean;
  userInfo: TUserInfo;
  error: boolean;
  isLogged: boolean;
  success: boolean;
}

export interface ICookieProps {
  [name: string]: string | number | boolean | Date | undefined;
  expires?: Date | number | string;
}

export interface IWsOrdersState {
  wsRequest: boolean;
  wsOpen: boolean;
  wsFailed: boolean;
  isSuccess: boolean;
  orders: TWsOrder[];
  total: number;
  totalToday: number;
}

