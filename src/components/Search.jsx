import {useState} from "react";

const Search = (props) => {
  const [search, setSearch] = useState("");

  function onSearchChange(e) {
    const value = e.currentTarget.value;
    setSearch(value);
    props.onChange(value);
  }

  return (
    <div className="search-container">
      Search by Name : <input type="text" onChange={onSearchChange} />
      <p>
        {props.totalPosts == props.postsLength
          ? "semua hasil"
          : `ditemukan ${props.totalPosts} hasil untuk "${search}"`}
      </p>
    </div>
  );
};

export default Search;
