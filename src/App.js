import { Route, Routes } from "react-router";
import "./App.css";
import About from "./pages/About/About";
import Login from "./pages/Access/Login";
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
          element={<Appointment></Appointment>}
        ></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
