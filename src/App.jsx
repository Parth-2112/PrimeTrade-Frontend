import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { LuSun, LuMoon } from "react-icons/lu";
import Home from "./pages/Home";

function App() {
  
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (

    <div className="bg-light w-full h-screen text-dark dark:bg-dark dark:text-light">
      
      <div className="w-8 h-8 rounded-full absolute top-4 right-4">
        <button
          onClick={toggleTheme}
          className="w-full h-full flex items-center justify-center rounded-full"
        >
          {theme === "dark" ? (
            <LuSun className="text-xl text-(--primary-color)" />
          ) : (
            <LuMoon className="text-xl text-(--secondary-color)" />
          )}
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </div>
  
  );
}

export default App;
