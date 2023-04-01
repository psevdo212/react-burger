import { FC } from "react";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forgotPass.module.css";
import { useNavigate } from "react-router";
import { restorePassQuery } from "../../utils/api";
import useForm from "../../hooks/useForm";
import { initialFormState } from "../../hooks/useForm";
import { TFormStateType } from "../../utils/types";

export const ForgotPass: FC = () => {
  const { values, handleChange } = useForm<TFormStateType>(initialFormState);
  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    restorePassQuery(values.email)
      .then((res) => {
        if (res.success) {
          navigate("/restorepass");
          localStorage.setItem("was-on-forgot", "true");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const navigate = useNavigate();

  function toLoginPage() {
    navigate("/login");
  }

  return (
    <form className={styles.form} onSubmit={formSubmit}>
      <h1 className="text text_type_main-medium pl-1">Восстановление пароля</h1>
      <EmailInput
        onChange={handleChange}
        value={values.email || ""}
        name={"email"}
        placeholder="Укажите e-mail"
        isIcon={false}
        extraClass="mt-6 mb-6"
      />
      <Button
        htmlType="submit"
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
          onClick={toLoginPage}
        >
          Войти
        </Button>
      </p>
    </form>
  );
}

export default ForgotPass;
