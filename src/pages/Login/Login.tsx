import React from "react";
import styles from "./login.module.css";
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useLocation, useNavigate } from "react-router";
import { useAppDispatch } from "../../hooks/storeHooks";
import useForm from "../../hooks/useForm";
import { loginUser } from "../../features/auth/authRequests";
import { TFormStateType } from "../../utils/types";
import { initialFormState } from "../../hooks/useForm";

export interface ILocationParams extends Location {
  from: string;
}

export const Login = () => {
  const { values, handleChange } = useForm<TFormStateType>(initialFormState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from;

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser(values));
    navigate(from);
  };

  function toRegisterPage() {
    navigate("/registration");
  }
  function toForgotPass() {
    navigate("/forgotpass");
  }

  return (
    <form className={styles.form} onSubmit={submitForm}>
      <h1 className="text text_type_main-medium">Вход</h1>
      <EmailInput
        onChange={handleChange}
        value={values.email || ""}
        name={"email"}
        placeholder="E-mail"
        isIcon={false}
        extraClass="mt-6"
      />
      <PasswordInput
        onChange={handleChange}
        value={values.password || ""}
        name={"password"}
        extraClass="mb-6 mt-6"
      />
      <Button
        htmlType="submit"
        type="primary"
        size="large"
        extraClass={styles.button}
      >
        Войти
      </Button>
      <p className="text text_type_main-default text_color_inactive mt-15 pl-1">
        <span> Вы - новый пользователь?</span>
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          extraClass="pr-1 pl-2 pb-2"
          onClick={toRegisterPage}
        >
          Зарегистрироваться
        </Button>
      </p>
      <p className="text text_type_main-default text_color_inactive pl-1">
        <span> Забыли пароль?</span>
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          extraClass="pr-1 pl-2 pt-2"
          onClick={toForgotPass}
        >
          Восстановить пароль
        </Button>
      </p>
    </form>
  );
};

export default Login;
