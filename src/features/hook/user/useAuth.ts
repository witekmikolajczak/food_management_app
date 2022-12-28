import { useEffect, useState } from "react";
import { useLoginMutation, useRegisterMutation } from "../../redux/api/auth";
import { useUserFullDataMutation } from "../../redux/api/user";
import { AUTH_OBJECT } from "../../constant/auth";
import { useNavigate } from "react-router-dom";

//redux
import { useAppSelector } from "../../redux/hook";
import { useAppDispatch } from "../../redux/hook";
import { loadAuthData } from "../../redux/reducer/auth";
import { changeIsLoadingStatus } from "../../redux/reducer/loading";

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [values, setValues] = useState<Array<AuthInterface>>(AUTH_OBJECT);
  const [step, setStep] = useState<number>(0);
  const state = useAppSelector((state) => state.auth);

  const [
    login,
    {
      data: loginResult,
      isError: loginIsError,
      error: loginError,
      isLoading: loginIsLoading,
      isSuccess: loginSuccess,
    },
  ] = useLoginMutation();
  const [
    register,
    {
      data: registerResult,
      isError: registerError,
      isLoading: registerLoading,
      isSuccess: registerSuccess,
    },
  ] = useRegisterMutation();

  const [
    userFullData,
    {
      data: userData,
      isError: userDataIsError,
      isLoading: userDataIsLoading,
      isSuccess: userDataIsSuccess,
    },
  ] = useUserFullDataMutation();
  function handleValuesChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setValues(
      values.map((value) =>
        value.name === event.target.name
          ? { ...value, value: event.target.value }
          : value
      )
    );
  }

  function handleClickBack() {
    if (step > 0) {
      setStep(step - 1);
    } else {
      setStep(0);
    }
  }

  function handleClickForward() {
    if (step < Math.floor(AUTH_OBJECT.length / 2)) {
      setStep(step + 1);
    } else {
      setStep(Math.floor(AUTH_OBJECT.length / 2));
    }
  }

  async function handleLogin() {
    const username = values.filter((value) => value.name === "login")[0].value;
    const password = values.filter((value) => value.name === "password")[0]
      .value;
    await login({ username, password });
    dispatch(changeIsLoadingStatus({ isLoading: true }));
  }

  async function handleRegister() {
    const firstname = values.filter((value) => value.name === "firstname")[0]
      .value;
    const lastname = values.filter((value) => value.name === "lastname")[0]
      .value;
    const username = values.filter((value) => value.name === "login")[0].value;
    const password = values.filter((value) => value.name === "password")[0]
      .value;
    const email = values.filter((value) => value.name === "email")[0].value;

    await register({
      firstname,
      lastname,
      username,
      password,
      email,
    });
  }

  useEffect(() => {
    if (loginResult && loginSuccess && !loginIsError) {
      dispatch(loadAuthData({ ...loginResult, isAuthenticated: true }));
      navigate("/dashboard");
    }
    if (loginIsError) {
      alert("Invalid username/password");
    }
  }, [loginResult, loginSuccess, loginError]);

  useEffect(() => {
    if (registerResult && registerSuccess && !registerError) {
      userFullData(registerResult.sessionToken);
    }
  }, [registerResult, registerSuccess, registerError]);

  useEffect(() => {
    if (userData && userDataIsSuccess && !userDataIsError) {
      dispatch(loadAuthData(userData));
      navigate("/dashboard");
    }
  }, [userData, userDataIsError, userDataIsLoading, userDataIsSuccess]);
  return {
    step,
    handleClickBack,
    handleClickForward,
    handleValuesChange,
    handleLogin,
    handleRegister,
  };
};
