import React, { useState } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  //const [historyList, setHistoryList] = useState([]);

  return (
    <>
      <input
        onChange={e => {
          setInputText(e.target.value);
        }}
        placeholder="Enter Some Text"
      />
      <br />
      {inputText}
    </>
  );
};

export default InputElement;
