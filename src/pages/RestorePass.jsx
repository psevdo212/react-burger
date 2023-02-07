import React from "react";
import AppHeader from "../components/AppHeader/AppHeader";
import {
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./restorePass.module.css";

export function RestorePass() {
  const [value, setValue] = React.useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={styles.login}>
      <AppHeader />
      <div className={styles.form}>
        <h1 className="text text_type_main-medium pl-1">
          Восстановление пароля
        </h1>
        <PasswordInput
          placeholder={"Введите новый пароль"}
          onChange={onChange}
          value={value}
          name={"newpassword"}
          extraClass="mt-6"
        />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          name={"lettercode"}
          error={false}
          extraClass="mb-6 mt-6"
        />
        <Button
          htmlType="button"
          type="primary"
          size="large"
          extraClass={styles.button}
        >
          Сохранить
        </Button>
        <p className="text text_type_main-default text_color_inactive mt-15 pl-1">
          <span> Вспомнили пароль?</span>
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            extraClass="pr-1 pl-2"
          >
          Войти
          </Button>
        </p>
      </div>
    </div>
  );
}

export default RestorePass;
