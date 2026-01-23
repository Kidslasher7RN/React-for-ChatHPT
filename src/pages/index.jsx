import dummyDb from "../db.json";
import Article from "../components/Article";

const Homepage = () => {
  function onSearch(e) {
    console.log(e.currentTarget);
  }

  return (
    <>
      <h1>Ivy's Words</h1>
      <div className="search-container">
        Search by Name : <input type="text" onChange={onSearch} />
      </div>
      <div className="Article-Container">
        {dummyDb.map(({firstName, institution, personalStatement}, index) => {
          return (
            <Article
              {...{firstName, institution, personalStatement}}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default Homepage;
