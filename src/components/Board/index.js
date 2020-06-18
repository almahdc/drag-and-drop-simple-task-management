import React from "react";

export default function Board(props) {
  return (
    <div className="droppable" onDrop={props.drop} onDragOver={props.dragOver}>
      {props.children}
    </div>
  );
}
