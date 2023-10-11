import { useEffect, useState } from "react";

import "../assets/Card.css";
import "../assets/colors.css";

const Card = (props) => {
  const [textFields, setTextFields] = useState([]);
  const [newText, setNewText] = useState("");
  const [headline, setHeadline] = useState("");

  useEffect(() => {
    setPrefetchedData();
  }, []);

  const setPrefetchedData = () => {
    if (props.task) {
      console.log(props.task);
      setHeadline(props.task.taskName);
      setNewText(props.task.description);
      newTextField();
    }
  };

  const newTextField = () => {
    if (newText != "") {
      setNewText("");
      console.log("!");

      const newTextField = createTextField(textFields.length);

      setTextFields((textFields) => [...textFields, newTextField]);
      console.log(textFields);
    }
  };

  const createTextField = () => {
    const key = Date.now();
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
      <div className="allCards">
        <div className="singleCard">
          <input type="text" value={headline} onChange={handleHeadline}></input>
          <br />
          {textFields}
          <input type="text" value={newText} onChange={handleInput}></input>
          <br />
          <button onClick={newTextField}>save</button>
        </div>
      </div>
    </>
  );
};

export default Card;
