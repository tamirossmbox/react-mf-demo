import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";

const App = () => (
  <div className="container">
    <Header />
    <h2>TS-HOST (HOME)</h2>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
