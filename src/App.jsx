import {useState} from "react";

import "./App.css";

import Home from "./pages/Index";

import {RouterProvider} from "react-router-dom";
import {router} from "./routers/index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
