import React, {useState} from "react";

// data
import {defaultTasks} from "./mockData/defaultTasks";

// style
import "./App.css";

// components
import Card from "./components/Card";
import Board from "./components/Board";

// TODO: id for cards different one
// TODO: position card in any position

export default function AppDragDropDemo() {
  const [tasks, setTasks] = useState(defaultTasks);

  var tasksState = {
    wip: [],
    complete: []
  };

  tasks.forEach(t => {
    tasksState[t.category].push(
      <Card
        key={t.name}
        onDragStart={e => dragStart(e, t.name)}
        className="draggable"
      >
        {t.name}
      </Card>
    );
  });

  const dragStart = (e, id) => {
    console.log("dragstart:", id);
    e.dataTransfer.setData("id", id);
  };

  const drop = (e, category) => {
    let id = e.dataTransfer.getData("id");
    let tasksFiltered = tasks.filter(task => {
      if (task.name === id) {
        task.category = category;
      }
      return task;
    });
    setTasks(tasksFiltered);
  };

  const dragOver = e => {
    e.preventDefault();
  };

  return (
    <div className="container-drag">
      <Board
        category="wip"
        drop={e => drop(e, "wip")}
        dragOver={e => dragOver(e)}
      >
        <span className="task-header">WORK IN PROGRESS</span>
        {tasksState.wip}
      </Board>
      <Board
        category="complete"
        drop={e => drop(e, "complete")}
        dragOver={e => dragOver(e)}
      >
        <span className="task-header">COMPLETED</span>
        {tasksState.complete}
      </Board>
    </div>
  );
}
