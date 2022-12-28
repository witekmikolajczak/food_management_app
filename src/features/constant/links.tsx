import { GrFormAdd } from "react-icons/gr";
import { CiLogout } from "react-icons/ci";
import {
  AiFillEdit,
  AiOutlineDelete,
  AiOutlineOrderedList,
  AiOutlineHome,
} from "react-icons/ai";

export const SIDEBAR_LINKS_COLLECTION = [
  {
    id: "0",
    name: "Strona główna",
    path: "dashboard",
    icon: <AiOutlineHome size={20} />,
  },
  {
    id: "1",
    name: "Dodaj produkt",
    path: "add-product",
    icon: <GrFormAdd size={20} />,
  },
  {
    id: "2",
    name: "Edytuj produkt",
    path: "edit-product",
    icon: <AiFillEdit size={20} />,
  },
  // {
  //   id: "3",
  //   name: "Usuń produkt",
  //   path: "delete-product",
  //   icon: <AiOutlineDelete size={20} />,
  // },
  {
    id: "4",
    name: "Lista przepisów",
    path: "recipt-list",
    icon: <AiOutlineOrderedList size={20} />,
  },
  {
    id: "5",
    name: "Lista produktów",
    path: "recipt-list",
    icon: <AiOutlineOrderedList size={20} />,
  },

  {
    id: "6",
    name: "Wyloguj",
    path: "auth",
    icon: <CiLogout size={20} />,
  },
];
