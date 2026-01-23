import {useState} from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Article from "./components/Article";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        {/* <Navbar /> */}
        <div className="Article-Container">
          {ivyLeagueStudents.map((student) => {
            return (
              <Article
                name={student.firstName}
                institution={student.institution}
                personalStatement={student.personalStatement}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
