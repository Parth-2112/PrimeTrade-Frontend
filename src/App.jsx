import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {

  return (

    <div className="bg-light w-full h-screen p-4 lg:px-20 lg:py-4 text-dark dark:bg-dark dark:text-light">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </div>
  
  );
}

export default App;
