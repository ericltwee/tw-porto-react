import React from "react";
import logo from "./logo.svg";
import spin from "./spinn.png";
import "./App.css";
import HoverImage from "react-hover-image";

// import Profile from "./parts/profile";
// import History from "./parts/history";
// import Skills from "./parts/skills";
// import Contact from "./parts/contact";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <HoverImage className="App-logo" src={logo} hoverSrc={spin} />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          // href="https://reactjs.org"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <Profile />
      <History />
      <Skills />
      <Contact /> */}
    </div>
  );
}

export default Home;
