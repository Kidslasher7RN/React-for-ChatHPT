import dummyDb from "../db.json";
import Article from "../components/Article";
import Search from "../components/Search";
import {useState} from "react";

const Homepage = () => {
  const [posts, setPosts] = useState(dummyDb);

  function filterByName(key) {
    setPosts(
      dummyDb.filter((data) => data.firstName.toLowerCase().includes(key)),
    );
  }

  return (
    <>
      <h1>Ivy's Words</h1>
      <Search onChange={filterByName} />
      <div className="Article-Container">
        {posts.map((props, index) => (
          <Article {...props} key={index} />
        ))}
      </div>
    </>
  );
};

export default Homepage;
