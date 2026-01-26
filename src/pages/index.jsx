import dummyDb from "../db.json";
import Article from "../components/Article";
import Search from "../components/Search";
import {useState} from "react";

const Homepage = () => {
  const [posts, setPosts] = useState(dummyDb);
  const [totalPost, setTotalPost] = useState(dummyDb.length);

  function filterByName(key) {
    const filterdData = dummyDb.filter((data) =>
      data.firstName.toLowerCase().includes(key.toLowerCase()),
    );

    setTotalPost(filterdData.length);
    setPosts(filterdData);
  }

  return (
    <>
      <h1>Ivy's Words</h1>
      <Search onChange={filterByName} totalPost={totalPost} />
      <div className="Article-Container">
        {posts.map((props, index) => (
          <Article {...props} key={index} />
        ))}
      </div>
    </>
  );
};

export default Homepage;
