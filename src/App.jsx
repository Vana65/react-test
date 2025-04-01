import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpp from "./components/SignUpp";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Logout from "./components/Logout";
import Logint from "./components/Logint";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/register" element={<SignUpp />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Logint />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
