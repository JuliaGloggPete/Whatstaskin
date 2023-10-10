import { createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

export const DataContext = createContext();
function App() {
  return (
    <DataContext.Provider>
      <Router>
        <div className="App">
          <Routes>{/* <Route path="/" element={} /> */}</Routes>
        </div>
      </Router>
    </DataContext.Provider>
  );
}

export default App;
