import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ArraysEx } from "./ArraysEx";
import { Table } from "../src/Table/Table";
import { TableRow } from "../src/Table/TableRow/TableRow";

function App() {
  return (
    <div className="App">
      <ArraysEx>
        <Table data={pets}></Table>
      </ArraysEx>
    </div>
  );
}

export default App;
