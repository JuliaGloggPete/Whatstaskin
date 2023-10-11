import { useState } from "react";

const Card = () => {
  const [textFields, setTextFields] = useState([]);
  const [newText, setNewText] = useState("");
  const [headline, setHeadline] = useState("");

  const newTextField = () => {
    setNewText("");
    console.log("!");
    const newTextField = createTextField(textFields.length);

    setTextFields((textFields) => [...textFields, newTextField]);
    console.log(textFields);
  };

  const createTextField = (key) => {
    console.log(key);
    return (
      <div key={key}>
        <p>{newText}</p>
        <input type="checkbox"></input>
      </div>
    );
  };

  const handleInput = (input) => {
    setNewText(input.target.value);
  };

  const handleHeadline = (input) => {
    setHeadline(input.target.value);
    console.log(headline);
  };

  return (
    <>
      <input type="text" value={headline} onChange={handleHeadline}></input>
      <br />
      {textFields}
      <input type="text" value={newText} onChange={handleInput}></input>
      <br />
      <button onClick={newTextField}>+</button>
    </>
  );
};

export default Card;
