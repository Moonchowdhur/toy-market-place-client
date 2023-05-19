import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../pages/provider/Authprovider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(Authcontext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <div
        className="radial-progress text-center text-green-500"
        style={{ "--value": 70 }}
      >
        70%
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
