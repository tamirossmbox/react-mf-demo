import React from "react";
import ReactDOM from "react-dom";
import Header from "home/Header";
import Footer from "home/Footer";
import "./index.css";

const App = () => (
  <div className="container">
    <Header />
    <h2>TS-REMOTE</h2>
    <div>Framework: react</div>
    <div>Language: Javascript</div>
    <div>CSS: Empty CSS</div>
    <hr />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
