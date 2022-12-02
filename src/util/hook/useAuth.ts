import { useState } from 'react';
import { REGISTER_OBJECT } from '../constant/auth';
export const useAuth = () => {
  const [values, setValues] = useState();
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
  return {
    values,
    step,
    handleClickBack,
    handleClickForward,
    setValues,
  };
};
