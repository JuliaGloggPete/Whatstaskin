import { useState } from "react"
import "../assets/Card.css"
import "../assets/colors.css"

const Card = () => {

    const [textFields, setTextFields] = useState([]);
    const [newText, setNewText] = useState('');
    const [headline, setHeadline] = useState('');

    const newTextField = () => {
        if (newText != '') {
            setNewText('');
            console.log('!');
            
            const newTextField = createTextField(textFields.length);
        
            setTextFields(textFields => [...textFields, newTextField]);
            console.log(textFields);
        }
    }

    const createTextField = (key) => {
        console.log(key)
        return (
            <div className="singleCard">

     
                <p key={key}>{newText}</p>
                <input key={key} type="checkbox"></input>
            </div>
        )
    }

    const handleInput = (input) => {
        setNewText(input.target.value);
        
    }

    const handleHeadline = (input) => {
        setHeadline(input.target.value);
        console.log(headline)
    }

    return (
        <><div className="allCards">

      
            <input type="text" className="textField" value={headline} onChange={handleHeadline}></input>
            <br></br>
            {textFields}
            <input type="text" className="textField" value={newText} onChange={handleInput}></input>
            <div></div>
            <br></br>
            <button onClick={newTextField}>+</button>
            </div>
        </>
    )
}

export default Card