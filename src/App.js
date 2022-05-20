import { Route, Routes } from "react-router";
import "./App.css";
import About from "./pages/About/About";
import Login from "./pages/Access/Login";
import RequireAuth from "./pages/Access/RequireAuth";
import SignUp from "./pages/Access/SignUp";
import Appointment from "./pages/Appointment/Appointment";
import Home from "./pages/Home/Home";
import Reviews from "./pages/Reviews/Reviews";
import Header from "./pages/Shared/Header";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }
        ></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
