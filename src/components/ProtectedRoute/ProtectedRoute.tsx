import React from 'react'
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

interface PrivateRoutesInterface { 
   isAuthenticated:boolean
}
export const PrivateRoutes = ({isAuthenticated}:PrivateRoutesInterface) => { 
   return isAuthenticated ? <Outlet /> : <Navigate to='/auth'/>;
 };