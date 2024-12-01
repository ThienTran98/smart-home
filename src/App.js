import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import LayoutRegisterAndLogin from "./HOC/LayoutRegisterAndLogin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={
              <LayoutRegisterAndLogin>
                <Login />
              </LayoutRegisterAndLogin>
            }
          />
          <Route
            path="/register"
            element={
              <LayoutRegisterAndLogin>
                <Register />
              </LayoutRegisterAndLogin>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
