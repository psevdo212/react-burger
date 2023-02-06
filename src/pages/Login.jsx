import React from "react";
import AppHeader from "../components/AppHeader/AppHeader";
import styles from "./login.module.css";
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const Login = () => {
  const [value, setValue] = React.useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={styles.login}>
      <AppHeader />
      <div className={styles.form}>
        <h1 className="text text_type_main-medium">Вход</h1>
        <EmailInput
          onChange={onChange}
          value={value}
          name={"email"}
          placeholder="E-mail"
          isIcon={false}
          extraClass="mt-6"
        />
        <PasswordInput
          onChange={onChange}
          value={value}
          name={"password"}
          extraClass="mb-6 mt-6"
        />
        <Button
          htmlType="button"
          type="primary"
          size="large"
          extraClass={styles.button}
        >
          Войти
        </Button>

        <p className="text text_type_main-default text_color_inactive mt-20">
          <span> Вы - новый пользователь?</span>
          <a href="#">Зарегистрироваться</a>
        </p>
        <p className="text text_type_main-default text_color_inactive mt-4">
          <span> Забыли пароль?</span>
          <a href="#">Восстановить пароль</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
