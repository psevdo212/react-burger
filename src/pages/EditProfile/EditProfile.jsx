import React from "react";
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./editProfile.module.css";

export function EditProfile() {
  const [value, setValue] = React.useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.ulwrap}>
          <ul className={styles.leftmenu}>
            <li className={styles.item}>
              <span className="text text_type_main-medium pl-3">Профиль</span>
            </li>
            <li className={styles.item}>
              <span className="text text_type_main-medium pl-3">
                История заказов
              </span>
            </li>
            <li className={styles.item}>
              <span className="text text_type_main-medium pl-3">Выход</span>
            </li>
            <li className={styles.item}>
              <p className="text text_type_main-default text_color_inactive pl-3 mt-15">
                В этом разделе вы можете изменить свои персональные данные
              </p>
            </li>
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
          <div className={styles.buttonwrap}>
            <Button
              htmlType="button"
              type="secondary"
              size="medium"
              extraClass="pr-7"
            >
              Отмена
            </Button>
            <Button htmlType="button" type="primary" size="medium">
              Сохранить
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
