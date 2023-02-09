import "../../vendor/normalize.css";
import styles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import { Outlet } from "react-router";
function App() {
  return (
    <div className={styles.App}>
      <AppHeader />
      <Outlet/>
    </div>
  );
}

export default App;
