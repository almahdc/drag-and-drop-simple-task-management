import React from "react";

export default function Card(props) {
  return (
    <div className="card" draggable onDragStart={props.onDragStart}>
      {props.children}
    </div>
  );
}
