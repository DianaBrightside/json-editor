import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categories from "./components/Categories";
import Json from "./components/Json";
import LoginPage from "./components/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Categories />} />
        <Route path="/json/:category" element={<Json />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
