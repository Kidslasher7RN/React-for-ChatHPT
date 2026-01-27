import {useState} from "react";

function Dummy({dummyFunc}) {
  const [text, setText] = useState("h9");

  function handleClick(e, name) {
    text == "h9" ? setText(name) : setText("h9");
    dummyFunc(text);
  }

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={(e) => handleClick(e, "brocode")}>click me</button>
    </div>
  );
}

export default Dummy;
