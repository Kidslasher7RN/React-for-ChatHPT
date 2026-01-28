import {createBrowserRouter} from "react-router-dom";
//Layouts
import RootLayout from "../layouts/RootLayout";
//Pages
import Home from "../pages/Index";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {path: "/", element: <Home />},
      {path: "/about", element: <About />},
    ],
  },
]);
