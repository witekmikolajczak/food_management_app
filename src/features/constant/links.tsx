import { GrFormAdd } from "react-icons/gr";
import { CiLogout } from "react-icons/ci";
import { MdProductionQuantityLimits } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import {
  AiFillEdit,
  AiOutlineOrderedList,
  AiOutlineHome,
} from "react-icons/ai";

export const SIDEBAR_LINKS_COLLECTION: LinkInterface[] = [
  {
    mainText: "Strona Główna",
    link: {
      id: "0",
      name: "Strona główna",
      path: "dashboard",
      icon: <AiOutlineHome size={20} />,
    },
  },
  {
    mainText: "Produkty",
    mainIcon: <MdProductionQuantityLimits size={20} />,
    subLinks: [
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
      {
        id: "3",
        name: "Lista produktów",
        path: "product-list",
        icon: <AiOutlineOrderedList size={20} />,
      },
    ],
  },

  {
    mainText: "Przepisy",
    mainIcon: <HiOutlineDocumentText size={20} />,
    subLinks: [
      {
        id: "4",
        name: "Dodaj przepis",
        path: "add-recipt",
        icon: <GrFormAdd size={20} />,
      },
      {
        id: "5",
        name: "Edytuj przepis",
        path: "edit-recipt",
        icon: <AiFillEdit size={20} />,
      },
      {
        id: "6",
        name: "Lista przepisów",
        path: "recipt-list",
        icon: <AiOutlineOrderedList size={20} />,
      },
    ],
  },
  {
    mainText: "Wyloguj",
    link: {
      id: "7",
      name: "Wyloguj",
      path: "auth",
      icon: <CiLogout size={20} />,
    },
  },
];
