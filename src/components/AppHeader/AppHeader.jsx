import {
  Logo,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./appHeader.module.css";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.list}>
        <div className="mt-4 mb-4 ml-5">
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            className={styles.buttonlist}
          >
            <ul className={styles.item}>
              <li className="mr-2">
                <BurgerIcon type="primary" />
              </li>
              <li className="text text_type_main-default">Конструктор</li>
            </ul>
          </Button>
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            className={styles.button}
          >
            <ul className={styles.item}>
              <li className="mr-2">
                <ListIcon type="secondary" />
              </li>
              <li className="text text_type_main-default text_color_inactive">
                Лента заказов
              </li>
            </ul>
          </Button>
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.private}>
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            className={styles.button}
          >
            <ul className={styles.item}>
              <li className="mr-2">
                <ProfileIcon type="secondary" />
              </li>
              <li className="text text_type_main-default text_color_inactive">
                Личный кабинет
              </li>
            </ul>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
