import React from "react";
import ReactDOM from "react-dom";
import TextTrimmer from "./TextTrimmer";

const Test = () => {
  return (
    <div style={{ margin: 50, padding: 30, width: 500, border: "2px solid grey" }}>
      <TextTrimmer
        text="UTF-8 为什么能够兼容 ASCII? Emoji 的网络传输效率和普通文本不相上下？为什么 Microsoft Yahei 的字体文件远比 Helvetica 的要大的多? 看完这篇博客，获得所有答案"
        onDetailsClick={text => alert(text)}
      />
    </div>
  );
};

ReactDOM.render(<Test />, document.querySelector("#root"));
