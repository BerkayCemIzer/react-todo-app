import React, { useState } from "react";
import Form from "./ToDo/Form/Form";
import List from "./ToDo/List/List";
import "../App.css";

function Todo() {
  const [matter, setMatter] = useState([]);

  return (
    <div className="todoapp">
      <div>
        <h1>todos</h1>
      </div>
      <div>
        <Form matter={matter} setMatter={setMatter} />
      </div>
      <div>
        <List matter={matter} setMatter={setMatter} />
      </div>
    </div>
  );
}

export default Todo;
