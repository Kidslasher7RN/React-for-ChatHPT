import {useState} from "react";

const Search = (props) => {
  const [search, setSearch] = useState("");

  function inputSearch(e) {
    setSearch(e.currentTarget.value);
  }

  function searchFilter() {
    props.filterSearch(search);
  }
  function searchFilterEnter(e) {
    e.key === "Enter" && searchFilter();
  }

  return (
    <div className="search-container">
      Search by Name :{" "}
      <input type="text" onChange={inputSearch} onKeyDown={searchFilterEnter} />
      <button onClick={searchFilter}>search</button>
      <p>
        {props.totalPosts == props.postsLength
          ? "semua hasil"
          : `ditemukan ${props.totalPosts} hasil untuk "${search}"`}
      </p>
    </div>
  );
};

export default Search;
