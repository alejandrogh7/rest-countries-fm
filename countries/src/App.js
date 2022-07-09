import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HiOutlineMoon, HiMoon } from "react-icons/hi";
import { useState } from "react";
import Home from "./components/Home/Home.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Header from "./components/Header/Header.jsx";
import NotMatch from "./components/NotMatch/NotMatch.jsx";

function App() {
  const [theme, setTheme] = useState("Light");

  const themeChange = () => {
    theme === "Light" ? setTheme("Dark") : setTheme("Light");
  };

  const moon = () => {
    if (theme === "Light") {
      return <HiOutlineMoon className="icon" />;
    } else {
      return <HiMoon className="icon" />;
    }
  };

  return (
    <div className={`app-${theme}-theme`}>
      <Header theme={theme} themeChange={themeChange} moon={moon} />
      <div className="app-body">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home theme={theme} />} />
            <Route
              path="/country/:countryName"
              exact
              element={<Detail theme={theme} />}
            />
            <Route path="*" exact element={<NotMatch theme={theme} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
