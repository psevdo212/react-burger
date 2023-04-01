import React, { useEffect } from "react";
import {
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./restorePass.module.css";
import { useNavigate } from "react-router";
import { resetPassQuery } from "../../utils/api";
import useForm from "../../hooks/useForm";
import { initialFormState } from "../../hooks/useForm";
import { TFormStateType } from "../../utils/types";

export function RestorePass() {
  const navigate = useNavigate();
  const { values, handleChange } = useForm<TFormStateType>(initialFormState);

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    resetPassQuery(values.password, values.lettercode)
      .then((res) => {
        if (res.success) {
          navigate("/login");
          localStorage.removeItem("was-on-forgot");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    if (!localStorage.getItem("was-on-forgot")) {
      navigate("/forgotpass");
    }
  });

  function toLoginPage() {
    navigate("/login");
  }

  return (
    <form className={styles.form} onSubmit={formSubmit}>
      <h1 className="text text_type_main-medium pl-1">Восстановление пароля</h1>
      <PasswordInput
        placeholder={"Введите новый пароль"}
        onChange={handleChange}
        value={values.password || ""}
        name={"password"}
        extraClass="mt-6"
      />
      <Input
        type={"text"}
        placeholder={"Введите код из письма"}
        onChange={handleChange}
        value={values.lettercode || ""}
        name={"lettercode"}
        error={false}
        extraClass="mb-6 mt-6"
      />
      <Button
        htmlType="submit"
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
          onClick={toLoginPage}
        >
          Войти
        </Button>
      </p>
    </form>
  );
}

export default RestorePass;
