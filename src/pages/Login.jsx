import React from "react";
import AppHeader from "../components/AppHeader/AppHeader";
import styles from "./login.module.css"

export const Login = () => {
  return (
    <div className={styles.login}>
      <AppHeader/>
      <div className={styles.form} >
        <h1>Вход</h1>

      </div>
    </div>
   );
}

export default Login;
