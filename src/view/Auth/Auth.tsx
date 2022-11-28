import React, { useState } from 'react';
import styles from './Auth.module.scss';

import { LOGIN_OBJECT, REGISTER_OBJECT } from '../../util/constant/auth';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

export const Auth = (): JSX.Element => {
  const [isRegistered, setIsRegistered] = useState<boolean>(true);
  const [step, setStep] = useState<number>(0);

  const handleClickBack = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      setStep(0);
    }
  };
  const handleClickForward = () => {
    if (step < Math.floor(REGISTER_OBJECT.length / 2)) {
      setStep(step + 1);
    } else {
      setStep(Math.floor(REGISTER_OBJECT.length / 2));
    }
  };

  const loginElement: JSX.Element = (
    <>
      <div>
        {LOGIN_OBJECT.map((input, index) => {
          return <input key={index} placeholder={input.placeholder} name={input.name} id={input.id} />;
        })}
      </div>
      <button>Zaloguj się</button>
    </>
  );
  const registerElement: JSX.Element = (
    <>
      <div>
        {REGISTER_OBJECT.map((input, index) => {
          if (step == input.page) return <input key={index} placeholder={input.placeholder} name={input.name} id={input.id} />;
        })}
      </div>

      <div className={styles['register-button-container']}>
        <div className={styles['register-button-left']}>
          <AiOutlineArrowLeft onClick={() => handleClickBack()} />
          <p onClick={() => handleClickBack()}>Cofnij</p>
        </div>
        {step !== Math.floor(REGISTER_OBJECT.length / 2) ? (
          <div className={styles['register-button-right']}>
            <p onClick={() => handleClickForward()}>Dalej</p>
            <AiOutlineArrowRight onClick={() => handleClickForward()} />
          </div>
        ) : (
          <button>Zarejestruj się</button>
        )}
      </div>
    </>
  );

  const renderAuthElement: JSX.Element = isRegistered ? loginElement : registerElement;
  const authText: string = isRegistered ? 'Zaloguj się!' : 'Zarejestruj się!';
  const haveAccount: string = isRegistered ? 'Nie masz konta?' : 'Masz już konto?';

  return (
    <div className={styles.wrapper}>
      <div className={styles['form-wrapper']}>
        <p>{authText}</p>
        {renderAuthElement}
      </div>
      <p onClick={() => setIsRegistered(!isRegistered)}>{haveAccount}</p>
    </div>
  );
};
