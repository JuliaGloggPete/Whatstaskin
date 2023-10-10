
import { useState } from 'react'

import { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProjectPage from "./Pages/ProjectPage";


export const DataContext = createContext();
function App() {

  return (
    <DataContext.Provider>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProjectPage />} />
        </Routes>
      </div>
    </DataContext.Provider>
  );

}

export default App;
