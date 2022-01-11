import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import Categories from "./components/Categories";
import Json from "./components/Json";
import { ProvideAuth } from "./authorization/authentication";

const App = () => {
  return (
    <ProvideAuth>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/json/:category" element={<Json />} />
          <Route
            exact
            path="/"
            element={<PrivateRoute component={Categories} />}
          />
        </Routes>
      </BrowserRouter>
    </ProvideAuth>
  );
};

export default App;
