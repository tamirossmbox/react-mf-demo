import React from "react";
import ReactDOM from "react-dom";
import Header from "home/Header";
import Footer from "home/Footer";
import "./index.css";

const App = () => (
  <div className="container">
    <Header />
    <h1>PAGE CONTENT</h1>
    <div>Name: mf-1</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <hr />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
