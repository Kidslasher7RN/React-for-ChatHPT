import {useState} from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
