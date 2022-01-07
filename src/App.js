import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categories from "./components/Categories";
import LoginPage from "./components/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
