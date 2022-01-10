import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProvideAuth } from "./authentication/authentication";
import Categories from "./components/Categories";
import Json from "./components/Json";
import LoginPage from "./components/LoginPage";
import PrivateRoute from "./components/PrivateRoute";

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
            element={
              <PrivateRoute>
                <Categories />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ProvideAuth>
  );
};

export default App;
