import React from 'react';
import { useAuth } from '../../util/hook/useAuth';
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import { AUTH_OBJECT } from '../../util/constant/auth';
import { CustomInput, Button, Typography } from '../../components';

import styles from './Auth.module.scss';

export const Register = () => {

  const {
    step,
    handleClickBack,
    handleClickForward,
    handleValuesChange,
    handleRegister
  } = useAuth();

  return (
    <React.Fragment>
      <div className={styles.register}>
        {AUTH_OBJECT.map((input, index) => {
          if (step == input.page)
            return (
              <CustomInput
                key={index}
                placeholder={input.placeholder}
                name={input.name}
                className={styles['register-input']}
                fnHandleChange={(event) => handleValuesChange(event)}
              />
            );
        })}
      </div>

      <div className={styles['register-button-container']}>
        <div className={styles['register-button-left']}>
          <AiOutlineArrowLeft onClick={() => handleClickBack()} />
          <Typography
            variant="p"
            fnHandleClick={() => handleClickBack()}
            text="Cofnij"
          />
        </div>
        {step !== Math.floor(AUTH_OBJECT.length / 2) ? (
          <div className={styles['register-button-right']}>
            <Typography
              variant="p"
              fnHandleClick={() => handleClickForward()}
              text="Dalej"
            />
            <AiOutlineArrowRight
              onClick={() => handleClickForward()}
            />
          </div>
        ) : (
          <Button
            text="Zarejestruj się"
            type="primary"
            fnHandleClick={handleRegister}
          />
        )}
      </div>
    </React.Fragment>
  );
};
