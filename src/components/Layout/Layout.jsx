import "../../vendor/normalize.css";
import styles from "./layout.module.css";
import AppHeader from "../AppHeader/AppHeader";
import { Outlet } from "react-router";
function Layout() {

  return (
    <div className={styles.App}>
      <AppHeader />
      <Outlet/>
    </div>
  );
}

export default Layout;