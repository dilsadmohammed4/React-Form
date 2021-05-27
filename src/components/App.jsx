import React, { useState } from "react";

function App() {
  const [name, setValue] = useState("");
  const [headingTxt, setHeadingText] = useState("");
  function onValueChange(event) {
    console.log();
    setValue(event.target.value);
  }
  function onSubmitChange(event) {
    setHeadingText(name);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {headingTxt} </h1>
      <form>
      <input
        onChange={onValueChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button type="submit" onClick={onSubmitChange}>Submit</button>
    </form>
    </div>
  );
}

export default App;
