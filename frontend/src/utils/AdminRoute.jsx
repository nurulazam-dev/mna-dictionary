/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";

const AdminRoute = ({ children, user }) => {
  return user?.role === "admin" ? children : <Navigate to="/" />;
};

export default AdminRoute;
