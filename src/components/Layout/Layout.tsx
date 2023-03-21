import "../../vendor/normalize.css";
import { FC } from "react";
import styles from "./layout.module.css";
import AppHeader from "../AppHeader/AppHeader";
import { Outlet } from "react-router";

export const Layout: FC = () => {

  return (
    <div className={styles.App}>
      <AppHeader />
      <Outlet/>
    </div>
  );
}

export default Layout;