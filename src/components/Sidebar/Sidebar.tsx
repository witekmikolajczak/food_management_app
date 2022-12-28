import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useLogoutMutation } from "../../features/redux/api/auth";
import { useAppDispatch, useAppSelector } from "../../features/redux/hook";
import { loadAuthData } from "../../features/redux/reducer/auth";

import { CustomNavLink } from "../Navlink/CustomNavLink";
import styles from "./Sidebar.module.scss";

interface SidebarInterface {
  linksCollection: LinkInterface[];
}
export const Sidebar = ({ linksCollection }: SidebarInterface): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const sessionToken = useAppSelector((state) => state.auth.sessionToken);
  const dispatch = useAppDispatch();
  const [
    logout,
    {
      data: logoutData,
      isError: isErrorLogout,
      isSuccess: isSuccessLogout,
      isLoading: isLoadingLogout,
    },
  ] = useLogoutMutation();

  async function handleLogout(
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) {
    if (event.currentTarget.id === "Wyloguj") {
      await logout(sessionToken);
    }
  }

  useEffect(() => {
    if (logoutData && !isErrorLogout && isSuccessLogout && !isLoadingLogout) {
      dispatch(
        loadAuthData({
          id: "",
          firstname: "",
          lastname: "",
          username: "",
          email: "",
          createdAt: "",
          sessionToken: "",
          isAuthenticated: false,
        })
      );
    }
  }, [logoutData, isErrorLogout, isSuccessLogout, isLoadingLogout]);

  return (
    <div className={`${styles.wrapper} ${isOpen ? styles.open : styles.close}`}>
      <div className={styles["toggle-icon"]}>
        {isOpen ? (
          <FaAngleRight
            size={25}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        ) : (
          <FaAngleLeft
            size={25}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        )}
      </div>

      <div className={styles.content}>
        <CustomNavLink
          isHidden={!isOpen}
          linksCollection={linksCollection}
          fnHandleClick={handleLogout}
        />
      </div>
    </div>
  );
};
