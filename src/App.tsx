import React from "react";
import "./App.css";
import DescriptionComponent from "./DescriptionComponent";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="description-container">
          <DescriptionComponent text="The fat cat and the blue bat went for a run with tim and tom. They didn't understand the scope of the mouthwash, due to it's minty flavor. If they hadn't climbed the ladder, they would still be on at ground level." />
        </div>
      </header>
    </div>
  );
};

export default App;
