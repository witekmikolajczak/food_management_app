import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { Auth } from './view/Auth/Auth';
import { Dashboard } from './view/Dashborad/Dashboard';

import './main.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // children: [
    //   {
    //     path: '/login',
    //     element: <Login />,
    //   },
    // ],
  },
  { path: '/auth', element: <Auth /> },
  { path: '/dashboard', element: <Dashboard /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
