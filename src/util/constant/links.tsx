import { GrFormAdd } from 'react-icons/gr';
import {
  AiFillEdit,
  AiOutlineDelete,
  AiOutlineOrderedList,
  AiOutlineHome,
} from 'react-icons/ai';
export const SIDEBAR_LINKS_COLLECTION = [
  {
    id: '0',
    name: 'Dodaj produkt',
    path: 'add-product',
    icon: <GrFormAdd size={20} />,
  },
  {
    id: '1',
    name: 'Edytuj produkt',
    path: 'edit-product',
    icon: <AiFillEdit size={20} />,
  },
  {
    id: '2',
    name: 'Usuń produkt',
    path: 'delete-product',
    icon: <AiOutlineDelete size={20} />,
  },
  {
    id: '2',
    name: 'Lista przepisów',
    path: 'recipt-list',
    icon: <AiOutlineOrderedList size={20} />,
  },
  {
    id: '3',
    name: 'Strona główna',
    path: 'dashboard',
    icon: <AiOutlineHome size={20} />,
  },
];
