import React from "react";
import { useAuth } from "../../features/hook/user/useAuth";
import { Button } from "../../components";
import { AUTH_OBJECT } from "../../features/constant/auth";
import { CustomInput } from "../../components";

import styles from "./Auth.module.scss";

export const Login = () => {
  const { handleValuesChange, handleLogin } = useAuth();

  const loginInputCollection = AUTH_OBJECT.filter(
    (auth) => auth.name === "login" || auth.name === "password"
  );
  return (
    <div className={styles.login}>
      {loginInputCollection.map((input, index) => {
        return (
          <CustomInput
            labelText=""
            labelVariant="p"
            inputType={input.inputType}
            key={index}
            fnHandleChange={(event) => handleValuesChange(event)}
            placeholder={input.placeholder}
            name={input.name}
            className={styles["login-input"]}
          />
        );
      })}
      <Button text="Zaloguj się" type="primary" fnHandleClick={handleLogin} />
    </div>
  );
};
