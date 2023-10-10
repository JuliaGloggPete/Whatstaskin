import { useEffect, useState } from "react";
import { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProjectPage from "./Pages/ProjectPage";

export const DataContext = createContext();

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await fetch("tasks.json");
        const data = await response.json();
        console.log(data.tasks);
        setTasks(data.tasks);
      } catch (error) {
        console.error(error, "Something went wrong");
      }
    }
    fetchTasks();
  }, []);

  return (
    <DataContext.Provider value={[tasks]}>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProjectPage />} />
        </Routes>
      </div>
    </DataContext.Provider>
  );
}

export default App;
