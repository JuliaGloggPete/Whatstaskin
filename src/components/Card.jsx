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

      const startTextField = createTextField(props.task.description);
      setTextFields([startTextField]);
    }
  };

  const newTextField = () => {
    

   if (newText != "") {
        const newTextField = createTextField(newText);
        setNewText("");
        setTextFields((textFields) => [...textFields, newTextField]);

    } 

    
   

  };

  const createTextField = (newItemText) => {
    const key = Date.now();
    console.log(key);
    return (

      <div key={key}>
        
      <h2>{headline}</h2>
        
  
        <div className="singleTask">

        <p>{newText}</p>

        <input type="checkbox"></input>
        </div>
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

      <div className="singleCard">
        <input type="text" value={headline} onChange={handleHeadline}></input>
        <br />
        {textFields}
        <input type="text" value={newText} onChange={handleInput}></input>
        <br />
        <button onClick={newTextField}>save</button>

        </div>
      
    </>
  );
};

export default Card;
