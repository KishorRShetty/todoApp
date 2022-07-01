import React from "react";
import { ListState } from "../Context";
import "./Snackbar.css";

function Snackbar() {
  const { snackMsg } = ListState();
  return <div className="snackbar">{snackMsg}</div>;
}

export default Snackbar;
