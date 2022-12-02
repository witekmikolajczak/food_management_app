import React from 'react';
import { useAuth } from '../../util/hook/useAuth';
import { Button } from '../../components';
import { LOGIN_OBJECT } from '../../util/constant/auth';
import { CustomInput } from '../../components';

import styles from './Auth.module.scss';

export const Login = () => {
  const { values, setValues } = useAuth();
  return (
    <div className={styles.login}>
      {LOGIN_OBJECT.map((input, index) => {
        return (
          <CustomInput
            fnHandleChange={() => setValues}
            value={values}
            key={index}
            placeholder={input.placeholder}
            name={input.name}
            className={styles['login-input']}
          />
        );
      })}
      <Button
        text="Zaloguj się"
        type="primary"
        fnHandleClick={() => console.log('login')}
      />
    </div>
  );
};
