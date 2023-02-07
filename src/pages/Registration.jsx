import React from "react";
import AppHeader from "../components/AppHeader/AppHeader";
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./registration.module.css";

export function Registration() {
  const [value, setValue] = React.useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={styles.login}>
      <AppHeader />
      <div className={styles.form}>
        <h1 className="text text_type_main-medium pl-1">Регистрация</h1>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          name={"username"}
          error={false}
          extraClass="mt-6"
        />
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
          Зарегистрироваться
        </Button>
        <p className="text text_type_main-default text_color_inactive mt-15 pl-1">
          <span> Уже зарегистрированы?</span>
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            extraClass="pr-1 pl-2 pb-2"
          >
          Войти
          </Button>
        </p>
      </div>
    </div>
  );
}

export default Registration;