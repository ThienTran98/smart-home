import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import LayoutRegisterAndLogin from "./HOC/LayoutRegisterAndLogin";
import LayoutDefault from "./HOC/LayoutDefault";
import Smart from "./Pages/Smart/Smart";
import Routine from "./Pages/Routine/Routine";
import Group from "./Pages/Group/Group";
import Chart from "./Pages/Chart/Chart";
import Setting from "./Pages/Setting/Setting";
import Notification from "./Pages/Notification/Notification";
import User from "./Pages/User/User";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutDefault>
                <HomePage />
              </LayoutDefault>
            }
          />
          <Route
            path="/smart"
            element={
              <LayoutDefault>
                <Smart />
              </LayoutDefault>
            }
          />
          <Route
            path="/routine"
            element={
              <LayoutDefault>
                <Routine />
              </LayoutDefault>
            }
          />
          <Route
            path="/group"
            element={
              <LayoutDefault>
                <Group />
              </LayoutDefault>
            }
          />
          <Route
            path="/chart"
            element={
              <LayoutDefault>
                <Chart />
              </LayoutDefault>
            }
          />
          <Route
            path="/setting"
            element={
              <LayoutDefault>
                <Setting />
              </LayoutDefault>
            }
          />
          <Route
            path="/notification"
            element={
              <LayoutDefault>
                <Notification />
              </LayoutDefault>
            }
          />
          <Route
            path="/user"
            element={
              <LayoutDefault>
                <User />
              </LayoutDefault>
            }
          />
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
