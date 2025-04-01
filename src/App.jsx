import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpp from "./components/SignUpp";
import Home from "./components/Home";
import About from "./components/About";
import Logout from "./components/Logout";
import Logint from "./components/Logint";
import Dashboard from "./components/Dashboard";
import "./style/App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<SignUpp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Logint />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
