import { MouseEventHandler } from "react";

export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
};

export type TIngIcon = {
  img: string;
  extra: string;
  count: number;
  isDiv: boolean;
};

export type TModal = {
  children: JSX.Element;
  handleClose: () => void;
  isOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TModalOverlay = {
  closeByOverlay: MouseEventHandler<HTMLDivElement>;
};

export type TUserOrder = {
  isUserOrder: boolean;
};

export type TReactPortal = {
  children: JSX.Element;
  wrapperId: string;
};

export type TUserInfo = {
  name?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  isEdit?: boolean;
};

export type TWsOrder = {
  _id: string;
  status: string | "pending" | "done";
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  ingredients: string[];
};

export type TOrder = {
  _id: string;
  ingredients: Array<string>;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
};

export type TOrderInfo = {
  order: TWsOrder;
  isLocation: boolean;
}

export type TIngImage = {
  ingredient: TIngredient;
  length?: number;
  Counter?: boolean;
  key: number;
}

export type TFormStateType = {
  name?: string;
  password?: string | undefined;
  email?: string | undefined;
  lettercode?: string | undefined;
};

export type TUserInfoState = {
  name?: string;
  email?: string;
  password?: string;
  isEdit?: boolean;
};