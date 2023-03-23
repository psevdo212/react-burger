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
  children: JSX.Element,
  handleClose: () => void,
}

export type TModalOverlay = {
  closeByOverlay: () => void,
}

export type TUserOrder = {
  isUserOrder: boolean,
}

export type TReactPortal = {
  children: JSX.Element,
  wrapperId: string,
}