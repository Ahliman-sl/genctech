import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";

function App() {
  const [darkmode, setIsDarkMode] = useState(false);
  return (
    <div
      className="container w-[98%] mx-auto"
      data-theme={darkmode ? "dark" : "light"}
    >
      <Navbar darkmode={darkmode} setIsDarkMode={setIsDarkMode} />
      <Home />
    </div>
  );
}

export default App;
