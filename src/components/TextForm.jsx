import { useState } from "react";

function TextForm(props) {
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here");

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpperCase}>Convert to Uppercase</button>
    </div>
  );
}

export default TextForm;
