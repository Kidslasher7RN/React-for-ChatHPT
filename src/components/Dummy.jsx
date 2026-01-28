import {useState, useEffect} from "react";

function Dummy({dummyFunc}) {
  const [text, setText] = useState("h9");

  function handleClick(e, name) {
    text == "h9" ? setText(name) : setText("h9");
    dummyFunc(text);
  }

  useEffect(() => {
    console.log("dummy mounted");
    return () => {
      console.log("clean up");
    };
  }, []);

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={(e) => handleClick(e, "brocode")}>click me</button>
    </div>
  );
}

export default Dummy;
