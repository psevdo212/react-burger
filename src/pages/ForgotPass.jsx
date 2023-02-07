import React from "react";
import AppHeader from "../components/AppHeader/AppHeader";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forgotPass.module.css";

export function ForgotPass() {
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
        <EmailInput
          onChange={onChange}
          value={value}
          name={"email"}
          placeholder="Укажите e-mail"
          isIcon={false}
          extraClass="mt-6 mb-6"
        />
        <Button
          htmlType="button"
          type="primary"
          size="large"
          extraClass={styles.button}
        >
          Восстановить
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

export default ForgotPass;
