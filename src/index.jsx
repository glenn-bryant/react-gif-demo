import '../assets/stylesheets/application.scss';

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

const root = document.querySelector("#root");

// class Hello extends React.Component{
// render() {
// const { name } = this.props;
// return (
//  <h1>Hello {name}!</h1>
// );
//  }
//  }
ReactDOM.render(<App />, root);
