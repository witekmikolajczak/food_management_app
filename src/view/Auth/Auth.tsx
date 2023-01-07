import { useState } from "react";

import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { Login } from "./Login";
import { Register } from "./Register";
import { Typography, Card } from "../../components";

import styles from "./Auth.module.scss";

export const Auth = (): JSX.Element => {
  const [isRegistered, setIsRegistered] = useState<boolean>(true);

  const renderAuthElement: JSX.Element = isRegistered ? (
    <Login />
  ) : (
    <Register />
  );
  const authText: string = isRegistered ? "Zaloguj się!" : "Zarejestruj się!";
  const haveAccount: string = isRegistered
    ? "Nie masz konta?"
    : "Masz już konto?";

  return (
    <div className={styles.wrapper}>
      <Card
        text={authText}
        icon={
          isRegistered ? (
            <AiOutlineLogin size={20} />
          ) : (
            <AiOutlineLogout size={20} />
          )
        }
        wrapperClassName={styles.wrapperClassName}
        contentClassName={styles.contentClassName}
      >
        {renderAuthElement}
        <Typography
          className={styles["have-account"]}
          variant="p"
          text={haveAccount}
          fnHandleClick={() => setIsRegistered(!isRegistered)}
        />
      </Card>
    </div>
  );
};
