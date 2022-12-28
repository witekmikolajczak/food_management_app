import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../features/redux/hook";
import { Loading } from "../../components";

export const AfterAuth = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.loading.isLoading);
  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);
  return <Loading />;
};
