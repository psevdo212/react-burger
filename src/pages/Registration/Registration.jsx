import React from "react";
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./registration.module.css";
import { useNavigate } from "react-router";
import { registerUser } from "../../features/auth/auth";
import { useDispatch } from "react-redux";
import useForm from "../../hooks/useForm";

export function Registration() {
  const { values, handleChange } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(registerUser(values));
    navigate("/");
  };

  function toLoginPage() {
    navigate("/login");
  }

  return (
    <>
      <form className={styles.form} onSubmit={submitForm}>
        <h1 className="text text_type_main-medium pl-1">Регистрация</h1>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={handleChange}
          value={values.name || ""}
          name={"name"}
          extraClass="mt-6"
        />
        <EmailInput
          onChange={handleChange}
          value={values.email || ""}
          type={"email"}
          name={"email"}
          placeholder="E-mail"
          isIcon={false}
          extraClass="mt-6"
        />
        <PasswordInput
          onChange={handleChange}
          value={values.password || ""}
          type={"password"}
          name={"password"}
          extraClass="mb-6 mt-6"
        />
        <Button
          htmlType="submit"
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
            onClick={toLoginPage}
          >
            Войти
          </Button>
        </p>
      </form>
    </>
  );
}

export default Registration;
