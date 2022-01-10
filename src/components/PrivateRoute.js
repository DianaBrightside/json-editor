import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../authentication/authentication";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();
  return user ? <Component /> : <Navigate to="/login" />;
  // <Route
  //   {...rest}
  //   render={() => {
  //     if (user) {
  //       return <Component />;
  //     } else {
  //       return <Navigate to="/login" />;
  //     }
  //   }}
  // />
};

export default PrivateRoute;
