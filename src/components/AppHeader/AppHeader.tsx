import { FC } from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";
import styles from "./appHeader.module.css";

type TIsActive = {
  isActive: boolean;
}

const AppHeader: FC = () => {
  const activeClass = ({ isActive }: TIsActive) =>
    isActive ? `${styles.link} ${styles.active}` : `${styles.link}`;
  return (
    <header className={styles.header}>
      <div className={styles.list}>
        <div className={styles.leftlinks}>
          <NavLink className={activeClass} to="/">
            <ul className={styles.item}>
              <li className="mr-2">
                <BurgerIcon type="secondary" />
              </li>
              <li className="text text_type_main-default mr-2">Конструктор</li>
            </ul>
          </NavLink>
          <NavLink className={activeClass} to="/orderfeed">
            <ul className={styles.item}>
              <li className="mr-2">
                <ListIcon type="secondary" />
              </li>
              <li className="text text_type_main-default">Лента заказов</li>
            </ul>
          </NavLink>
        </div>
        <NavLink to="/">
          <div className={styles.logo}>
            <Logo />
          </div>
        </NavLink>
        <div className={styles.private}>
          <NavLink className={activeClass} to="/profile">
            <ul className={styles.item}>
              <li className="mr-2">
                <ProfileIcon type="secondary" />
              </li>
              <li className="text text_type_main-default">Личный кабинет</li>
            </ul>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
