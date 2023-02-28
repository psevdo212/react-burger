import { useState } from "react";
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInfo } from "../../features/auth/authRequests";

function Profile() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((store) => store.auth);
  const [userData, setUserData] = useState(userInfo);

  function formValue(value) {
    setUserData({
      ...userData,
      [value.target.name]: value.target.value,
      isEdit: true,
    });
  }

  const formSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUserInfo(userData));
  };

  const dismissChanges = () => {
    setUserData({
      name: userInfo.name,
      email: userInfo.email,
      password: null,
    });
  };

  return (
    <form className={styles.form} onSubmit={formSubmit}>
      <Input
        type={"text"}
        placeholder={"Имя"}
        onChange={formValue}
        value={userData.name || ""}
        name={"name"}
        error={false}
        icon="EditIcon"
      />
      <EmailInput
        onChange={formValue}
        value={userData.email || ""}
        name={"email"}
        placeholder="Логин"
        isIcon={true}
        extraClass="mt-6"
      />
      <PasswordInput
        onChange={formValue}
        value={userData.password || ""}
        name={"password"}
        extraClass="mb-6 mt-6"
        icon="EditIcon"
      />
      {userData.isEdit && (
        <div className={styles.buttonwrap}>
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            extraClass="pr-7"
            onClick={dismissChanges}
          >
            Отмена
          </Button>
          <Button htmlType="submit" type="primary" size="medium">
            Сохранить
          </Button>
        </div>
      )}
    </form>
  );
}

export default Profile;
