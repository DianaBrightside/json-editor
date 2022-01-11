import { Navigate } from "react-router-dom";

import { useAuth } from "../authorization/authentication";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useAuth();

  return auth?.user ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
