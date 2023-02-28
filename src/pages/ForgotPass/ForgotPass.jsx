import { useState } from "react";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forgotPass.module.css";
import { useNavigate } from "react-router";
import { restorePassQuery } from "../../utils/api";

export function ForgotPass() {
  const [userData, setUserData] = useState("");

  function formValue(value) {
    setUserData(value.target.value);
  }

  const formSubmit = (event) => {
    event.preventDefault();
    restorePassQuery(userData);
    navigate("/restorepass");
  };

  const navigate = useNavigate();

  function toLoginPage() {
    navigate("/login");
  }

  return (
    <form className={styles.form} onSubmit={formSubmit}>
      <h1 className="text text_type_main-medium pl-1">Восстановление пароля</h1>
      <EmailInput
        onChange={formValue}
        value={userData}
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
