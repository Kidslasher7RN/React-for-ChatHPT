import {useState} from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import Article from "./components/Article";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
