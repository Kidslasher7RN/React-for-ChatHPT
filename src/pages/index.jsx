import dummyDb from "../db.json";
import Article from "../components/Article";
import Search from "../components/Search";
import Dummy from "../components/Dummy";
import {useState} from "react";

const Homepage = () => {
  const [posts, setPosts] = useState(dummyDb);
  const [totalPosts, setTotalPosts] = useState(dummyDb.length);

  function filterByName(key) {
    const filterdData = dummyDb.filter((data) =>
      data.firstName.toLowerCase().includes(key.toLowerCase()),
    );

    setTotalPosts(filterdData.length);
    setPosts(filterdData);
  }

  return (
    <>
      <h1>Ivy's Words</h1>
      <Search
        filterSearch={filterByName}
        totalPosts={totalPosts}
        postsLength={dummyDb.length}
      />
      <div className="Article-Container">
        {posts.map((props, index) => (
          <Article {...props} key={index} />
        ))}
      </div>
      <Dummy />
    </>
  );
};

export default Homepage;
