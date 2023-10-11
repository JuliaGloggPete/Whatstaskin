import { DataContext } from "../App";
import { useContext, useEffect, useState } from "react";
import Card from "../components/Card";

function ProjectBoard({ heading }) {
  const [cards, setCards] = useState([]);
  const [tasks] = useContext(DataContext);

  useEffect(() => {
    if (tasks && tasks.length > 0) {
      const newCards = tasks.map((task, i) => <Card key={i} task={task} />);
      setCards(newCards);
    }
  }, [tasks]);

  function createCard() {
    const newCard = <Card />;
    setCards([...cards, newCard]);
    console.log("click");
  }

  return (
    <div>
      <header>{heading}</header>
      <button onClick={createCard}>Add task</button>
      {cards}
    </div>
  );
}

export default ProjectBoard;
