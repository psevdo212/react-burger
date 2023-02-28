import React from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profilePage.module.css";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import { logoutUser } from "../../features/auth/authRequests";
import { useDispatch } from "react-redux";

export function ProfilePage() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logout() {
    dispatch(logoutUser());
    navigate("/login");
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.ulwrap}>
        <ul className={styles.leftmenu}>
          <li className={styles.item}>
            <NavLink
              to="/profile"
              className={
                pathname === "/profile"
                  ? `${styles.navlink} ${styles.active}`
                  : `${styles.navlink}`
              }
            >
              <span className="text text_type_main-medium pl-3">Профиль</span>
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to="ordershistory"
              className={
                pathname === "/profile/ordershistory"
                  ? `${styles.navlink} ${styles.active}`
                  : `${styles.navlink}`
              }
            >
              <span className="text text_type_main-medium pl-3">
                История заказов
              </span>
            </NavLink>
          </li>
          <li className={styles.item}>
            <Button
              htmlType="button"
              type="secondary"
              className={styles.button}
              onClick={logout}
            >
              <span className="text text_type_main-medium pl-3">Выход</span>
            </Button>
          </li>
          <li className={styles.item}>
            <p className="text text_type_main-default text_color_inactive pl-3 mt-15">
              В этом разделе вы можете изменить свои персональные данные
            </p>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default ProfilePage;
