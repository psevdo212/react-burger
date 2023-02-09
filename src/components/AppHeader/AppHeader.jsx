import {
  Logo,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useMatch, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import styles from "./appHeader.module.css";
import CustomLink from "../CustomLink";

const AppHeader = () => {
 const navigate = useNavigate();

 function toMainPage() {
  navigate('/')
 }
  const mainMatch = useMatch('/');
  return (
    <header className={styles.header}>
      <div className={styles.list}>
        <div className="mt-4 mb-4 ml-5">
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            className={styles.buttonlist}
            onClick={toMainPage}
          >
            <ul className={styles.item}>
              <li className="mr-2">
                <BurgerIcon type={mainMatch ? "primary" : "secondary"} />
              </li>
              <li className={mainMatch ? "text text_type_main-default" : "text text_type_main-default text_color_inactive"}>Конструктор</li>
            </ul>
          </Button>
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            className={styles.button}
          >
            <ul className={styles.item}>
              <li className="mr-2">
                <ListIcon type="secondary" />
              </li>
              <li className="text text_type_main-default text_color_inactive">
                Лента заказов
              </li>
            </ul>
          </Button>
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.private}>
          <NavLink
            className={styles.button}
            to='/profile'
          >
            <ul className={styles.item}>
              <li className="mr-2">
                <ProfileIcon type="secondary" />
              </li>
              <li className="text text_type_main-default text_color_inactive">
                Личный кабинет
              </li>
            </ul>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
