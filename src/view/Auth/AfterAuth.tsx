import  { useEffect } from "react";
import {  useAppSelector } from "../../features/redux/hook";
import { Loading } from "../../components";

export const AfterAuth = () => {
  const isLoading = useAppSelector((state) => state.loading.isLoading);
  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);
  return <Loading />;
};
