import React from "react";

function TodoList({ id, value, deleteHandler, editHandler }) {
  return (
    <div className="list-container">
      <div className="todo-desc">
          {/* <input className="span" value={value} /> */}
        <span>{value}</span>
      </div>
      <div>
        <button className="edit-btn" onClick={()=> editHandler(id, value)}>Edit</button>
        <button className="delete-btn" onClick={() => deleteHandler(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoList;
