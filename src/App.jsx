import React from "react";
import Chat from "./components/Chat";
import "./App.css";
import logo from "./assets/logo.png";

const App = () => {
  return (
    <div className="app">
      <div className="heading">
        <img src={logo} alt="Minimin chat App" />
      </div>
      <Chat />
    </div>
  );
};

export default App;
