import { Navigate } from "react-router-dom";

import { useAuth } from "../authentication/authentication";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  return user ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
