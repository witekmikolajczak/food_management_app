import React from 'react';
import { useAuth } from '../../util/hook/useAuth';
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import { REGISTER_OBJECT } from '../../util/constant/auth';
import { CustomInput, Button, Typography } from '../../components';

import styles from './Auth.module.scss';

export const Register = () => {
  const {
    values,
    step,
    handleClickBack,
    handleClickForward,
    setValues,
  } = useAuth();
  return (
    <React.Fragment>
      <div className={styles.register}>
        {REGISTER_OBJECT.map((input, index) => {
          if (step == input.page)
            return (
              <CustomInput
                key={index}
                placeholder={input.placeholder}
                name={input.name}
                value={values}
                className={styles['register-input']}
                fnHandleChange={() => setValues}
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
        {step !== Math.floor(REGISTER_OBJECT.length / 2) ? (
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
            fnHandleClick={() => console.log('register')}
          />
        )}
      </div>
    </React.Fragment>
  );
};
