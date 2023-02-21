import React from "react";
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";
import { NavLink } from "react-router-dom";

export function Profile() {
  const [value, setValue] = React.useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const activeClass = ({ isActive }) => isActive ? `${styles.navlink} ${styles.active}` : `${styles.navlink}`;
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.ulwrap}>        
            <ul className={styles.leftmenu}>
                <li className={styles.item}><NavLink to="/profile" className={activeClass}><span className="text text_type_main-medium pl-3">Профиль</span></NavLink></li>
                <li className={styles.item}><NavLink to="/orderhistory" className={activeClass}><span className="text text_type_main-medium pl-3" >История заказов</span></NavLink></li>
                <li className={styles.item}><Button htmlType="button" type="secondary" className={styles.button} ><span className="text text_type_main-medium pl-3">Выход</span></Button></li>
                <li className={styles.item}><p className="text text_type_main-default text_color_inactive pl-3 mt-15">В этом разделе вы можете изменить свои персональные данные</p></li>
            </ul>
        </div>
        
      <div className={styles.form}>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          name={"username"}
          error={false}
          icon="EditIcon"
        />
        <EmailInput
          onChange={onChange}
          value={value}
          name={"email"}
          placeholder="Логин"
          isIcon={true}
          extraClass="mt-6"
        />
        <PasswordInput
          onChange={onChange}
          value={value}
          name={"password"}
          extraClass="mb-6 mt-6"
          icon="EditIcon"
        />
      </div>
      </div>
    </>
  );
}

export default Profile;
