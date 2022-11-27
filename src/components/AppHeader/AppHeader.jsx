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
            style={{
              paddingTop: 16,
              paddingBottom: 16,
              paddingLeft: 20,
              paddingRight: 20,
              marginRight: 8,
            }}
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
            style={{
              paddingTop: 16,
              paddingBottom: 16,
              paddingLeft: 20,
              paddingRight: 20,
            }}
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
        <div className="mt-5 mb-6" style={{ paddingLeft: 38 }}>
          <Logo />
        </div>
        <div className="mt-4 mb-4" style={{ paddingLeft: 90 }}>
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            style={{
              paddingTop: 16,
              paddingBottom: 16,
              paddingLeft: 20,
              paddingRight: 20,
            }}
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
