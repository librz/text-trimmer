import React from "react";
import ReactDOM from "react-dom";
import TextTrimmer from "./TextTrimmer";

const Test = () => {
  return (
    <div style={{ margin: 50, padding: 30, border: "3px solid gray" }}>
      <div style={{ marginBottom: 20 }}>Resize browser window to see the effect</div>
      <TextTrimmer
        text="Using props and state, we can put together a small Todo application. This example uses state to track the current list of items."
        onDetailsClick={text => alert(text)}
      />
    </div>
  );
};

ReactDOM.render(<Test />, document.querySelector("#root"));
