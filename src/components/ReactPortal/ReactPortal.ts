import { FC } from "react";
import { createPortal } from "react-dom";
import { TReactPortal } from "../../utils/types";

export const ReactPortal: FC<TReactPortal> = ({ children, wrapperId }) => {
  return createPortal(children, document.getElementById(wrapperId) as HTMLElement);
}
export default ReactPortal;
