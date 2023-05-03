import React, { useState } from "react";

export default function Textform(props) {
  const handleOnChange = (event) => {
    setTExt(event.target.value);
  };
  const handleUpCase = () => {
    let newText = text.toUpperCase();
    setTExt(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLowCase = () => {
    let newText = text.toLowerCase();
    setTExt(newText);
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleClear = () => {
    let newText = "";
    setTExt(newText);
    props.showAlert("All Text Cleard", "success");
  };
  const [text, setTExt] = useState("");
  return (
    <div
      className="mb-3 my-3"
      style={{ color: props.mode === "dark" ? "white" : "#042743" }}
    >
      <h1>{props.heading}</h1>

      <textarea
        className="form-control"
        placeholder="Leave a comment here"
        id="floatingTextarea"
        rows="8"
        value={text}
        onChange={handleOnChange}
        style={{
          backgroundColor: props.mode === "dark" ? "#042743" : "white",
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      ></textarea>
      <div className="my-2 ">
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpCase}>
          Convert to UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLowCase}>
          Convert to LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div
        className="my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h4>Your summary</h4>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} charachter{" "}
        </p>
        <p>{text}</p>
      </div>
    </div>
  );
}
