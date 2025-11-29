// import { useLocation, Navigate, Outlet } from 'react-router-dom';
// import useAuth from '../hooks/useAuth';

// const RequireAuth = ( { allowedRoles }) => {
//     const { auth } = useAuth();
//     const location = useLocation();

//     return (
//         allowedRoles.includes(auth?.role)
//             ? <Outlet />
//             : <Navigate to="/login" state={{from : location}} replace />
//     );
// }

// export default RequireAuth;



// src/components/RequireAuth.js

import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  // If no auth or no role exist → redirect to login
  if (!auth?.role) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check if user's role is allowed for this route
  return allowedRoles.includes(auth.role) ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
