import dummyDb from "../db.json";
import Article from "../components/Article";
import FakeArticle from "../components/fakeAPIArticle";
import Search from "../components/Search";
import Dummy from "../components/Dummy";
import {useState, useEffect} from "react";

import "./Index.css";
import Navbar from "../components/Navbar";

import {userState} from "../context/userState";

const Homepage = () => {
  const [posts, setPosts] = useState(dummyDb);
  const [totalPosts, setTotalPosts] = useState(dummyDb.length);
  const [fakeAPI, setFakeAPI] = useState([]);

  function filterByName(key) {
    const filterdData = dummyDb.filter((data) =>
      data.firstName.toLowerCase().includes(key.toLowerCase()),
    );

    setTotalPosts(filterdData.length);
    setPosts(filterdData);
  }

  const [dummyState, setDummyState] = useState(false);
  function dummyFunc(value) {
    setDummyState(value);
  }

  function toggleDummy() {
    console.log(fakeAPI);
    if (dummyState) {
      setDummyState(false);
    } else {
      setDummyState(true);
    }
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((data) => setFakeAPI(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log("dummy state changed");
  }, [dummyState]);

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

      <h1>Ivy's Words</h1>
      <Search
        filterSearch={filterByName}
        totalPosts={totalPosts}
        postsLength={dummyDb.length}
      />
      <div className="Article-Container">
        {posts.map((props) => (
          <Article {...props} key={props.id} />
        ))}
        {fakeAPI.map((props, index) => (
          <FakeArticle {...props} key={index} />
        ))}
      </div>
      <button onClick={toggleDummy}>toggle dummy</button>

      {dummyState && <Dummy dummyFunc={dummyFunc} />}
    </>
  );
};

export default Homepage;
