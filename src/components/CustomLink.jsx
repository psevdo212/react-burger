import { Link, useMatch } from "react-router-dom";

export const CustomLink = ({ children, to }) => {
  const match = useMatch(to);
  return (
    <Link
      to={to}
      className={
        match
          ? "text text_type_main-default"
          : "text text_type_main-default text_color_inactive"
      }
    >
      {children}
    </Link>
  );
};

export default CustomLink;
