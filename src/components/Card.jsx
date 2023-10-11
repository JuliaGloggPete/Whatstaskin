import { useId, useState } from "react"

const Card = (props) => {

    
    const [textFields, setTextFields] = useState([]);
    const [newText, setNewText] = useState('');
    const [headline, setHeadline] = useState('');
    

    if (props.task) {
        setHeadline(props.task.taskName);
    }


    const newTextField = () => {
        if (newText != '') {
            setNewText('');
            console.log('!');
            const newTextField = createTextField();
        
            setTextFields(textFields => [...textFields, newTextField]);
            console.log(textFields);
        }
    }

    const createTextField = () => {
        const key = Date.now();
        console.log(key)
        return (
            <div  key={key}>
                <p>{newText}</p>
                <input type="checkbox"></input>
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
        <>
            <h2 value={headline} onChange={handleHeadline}></h2>
            <br></br>
            {textFields}
            <input type="text" value={newText} onChange={handleInput}></input>
            <br></br>
            <button onClick={newTextField}>+</button>
        </>
    )
}

export default Card