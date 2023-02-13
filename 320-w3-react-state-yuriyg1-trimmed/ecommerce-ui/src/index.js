import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import bnbs from './bnbs.json';
import RentalCards from "./App";

ReactDOM.render(
  <RentalCards rentals={bnbs} />,
  document.getElementById("root")
);