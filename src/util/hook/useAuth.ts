import { useEffect, useState } from 'react';
import { useLoginMutation, useRegisterMutation } from '../redux/api/auth';
import { useUserFullDataMutation } from '../redux/api/user';
import { useAppDispatch } from '../redux/hook';
import { loadAuthData } from '../redux/reducer/auth';
import { AUTH_OBJECT } from '../constant/auth';
import { useAppSelector } from '../redux/hook';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState<Array<AuthInterface>>(AUTH_OBJECT);
  const [step, setStep] = useState<number>(0);
  const state = useAppSelector((state)=>state.auth)
  console.log(state);

  const [
    login, 
    {
      data: loginResult,
      isError: loginError,
      isLoading: loginLoading,
      isSuccess: loginSuccess
    }
  ] = useLoginMutation()
  const [
    register,
    {
      data: registerResult,
      isError: registerError,
      isLoading: registerLoading,
      isSuccess: registerSuccess
    }
  ] = useRegisterMutation()

  const [
    userFullData,
    {
    data: userData,
  }
] = useUserFullDataMutation()
  const dispatch = useAppDispatch()

  function handleValuesChange(
    event:React.ChangeEvent<HTMLInputElement>
  ):void {        
    setValues(
      values.map((value) =>
        value.name === event.target.name
          ? { ...value, value: event.target.value }
          : value
      )
    );
  }

  function handleClickBack(){
    if (step > 0) {
      setStep(step - 1);
    } else {
      setStep(0);
    }
  };

  function handleClickForward(){
    if (step < Math.floor(AUTH_OBJECT.length / 2)) {
      setStep(step + 1);
    } else {
      setStep(Math.floor(AUTH_OBJECT.length / 2));
    }
  };

  async function handleLogin(){
    const username = values.filter((value)=>value.name === 'login')[0].value;
    const password = values.filter((value)=>value.name === 'password')[0].value;

    await login({username, password})
    navigate('/dashboard')
  }

  async function handleRegister(){
    const firstname = values.filter((value)=>value.name === 'firstname')[0].value;
    const lastname = values.filter((value)=>value.name === 'lastname')[0].value;
    const username = values.filter((value)=>value.name === 'login')[0].value;
    const password = values.filter((value)=>value.name === 'password')[0].value;
    const email = values.filter((value)=>value.name === 'email')[0].value;

    const response = await register({
      firstname,
      lastname,
      username,
      password,
      email
    })
    // await userFullData({response.sessionToken}) 
  }

  useEffect(()=>{
    if(
      loginResult && 
      loginSuccess && 
      !loginError
    ) dispatch(loadAuthData({...loginResult, isAuthenticated:true}))
    
  },[loginResult, loginSuccess, loginError])

  useEffect(()=>{
    // if(
    //   registerResult && 
    //   registerSuccess && 
    //   !registerError
    // ) dispatch(loadAuthData(registerResult))
  },[registerResult, registerSuccess, registerError])

  return {
    step,
    handleClickBack,
    handleClickForward,
    handleValuesChange,
    handleLogin,
    handleRegister
  };
};
