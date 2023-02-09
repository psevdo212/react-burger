import React from "react";
import {
  Input,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";

export function Profile() {
  const [value, setValue] = React.useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.ulwrap}>        
            <ul className={styles.leftmenu}>
                <li className={styles.item}><span className="text text_type_main-medium pl-3 text_color_inactive">Профиль</span></li>
                <li className={styles.item}><span className="text text_type_main-medium pl-3 text_color_inactive" >История заказов</span></li>
                <li className={styles.item}><span className="text text_type_main-medium pl-3 text_color_inactive">Выход</span></li>
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
        //   extraClass="mt-6"
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
