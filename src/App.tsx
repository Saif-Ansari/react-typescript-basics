import React from "react";
import logo from "./logo.svg";
import "./App.css";

//Conventional proposal
function Heading({ title }: { title: string }) {
  return <h1>{title}</h1>;
}
function App() {
  return (
    <div className="App">
      <Heading title="Heading" />
    </div>
  );
}

export default App;
