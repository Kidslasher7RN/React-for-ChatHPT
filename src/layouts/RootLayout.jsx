import {Link, Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";
import {useState, useEffect} from "react";
import {userState} from "../context/userState";

const RootLayout = () => {
  const [userAccount, setUserAccount] = useState("N/A");
  const [isOnline, setIsOnline] = useState("offline");

  useEffect(() => {
    setUserAccount("rick");
    setIsOnline("online");
  }, []);
  return (
    <>
      <userState.Provider
        value={{userAccount, setUserAccount, isOnline, setIsOnline}}
      >
        <Navbar />
      </userState.Provider>

      <Outlet />
    </>
  );
};

export default RootLayout;
