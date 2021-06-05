import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <>
      <h5 class="card-title">{todo.title}</h5>
      <p class="card-text">{todo.desc}</p>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>
    </>
  );
};
