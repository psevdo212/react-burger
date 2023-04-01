import { useState } from "react";
import {
  Button,
  Input,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profilePage.module.css";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import { logoutUser } from "../../features/auth/authRequests";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { updateUserInfo } from "../../features/auth/authRequests";
import { TUserInfoState } from "../../utils/types";


export function ProfilePage() {
  const { pathname } = useLocation();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logoutUser());
    navigate("/login");
  }

  const { userInfo } = useAppSelector((store) => store.auth);
  const [userData, setUserData] = useState<TUserInfoState>(userInfo);

  function formValue(value: React.ChangeEvent<HTMLInputElement>) {
    setUserData({
      ...userData,
      [value.target.name]: value.target.value,
      isEdit: true,
    });
  }

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(updateUserInfo(userData));
  };

  const dismissChanges = () => {
    setUserData({
      name: userInfo.name,
      email: userInfo.email,
      password: "",
    });
  };

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
              state={{ orders: true }}
              end
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
      {location.state?.orders || location.pathname === "/profile/ordershistory" ? (
        <Outlet />
      ) : (
        <form className={styles.form} onSubmit={formSubmit}>
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={formValue}
            value={userData.name || ""}
            name={"name"}
            error={false}
            icon="EditIcon"
          />
          <EmailInput
            onChange={formValue}
            value={userData.email || ""}
            name={"email"}
            placeholder="Логин"
            isIcon={true}
            extraClass="mt-6"
          />
          <PasswordInput
            onChange={formValue}
            value={userData.password || ""}
            name={"password"}
            extraClass="mb-6 mt-6"
            icon="EditIcon"
          />
          {userData.isEdit && (
            <div className={styles.buttonwrap}>
              <Button
                htmlType="button"
                type="secondary"
                size="medium"
                extraClass="pr-7"
                onClick={dismissChanges}
              >
                Отмена
              </Button>
              <Button htmlType="submit" type="primary" size="medium">
                Сохранить
              </Button>
            </div>
          )}
        </form>
      )}
    </div>
  );
}

export default ProfilePage;
