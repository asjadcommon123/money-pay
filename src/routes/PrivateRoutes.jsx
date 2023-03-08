import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const PrivateRoutes = () => {
  const { token } = useSelector((state) => state.auth);
  const isAuthorized = token;
  return isAuthorized ? <Outlet /> : <Navigate to={'/login'} />;
};

export default PrivateRoutes;
