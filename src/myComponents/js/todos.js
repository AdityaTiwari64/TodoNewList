import React from 'react'
import { TodoItem } from "../js/todoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "23vh",
        margin: "40px auto"
    }
    return (
        <>
            <h3 className=" my-3 container">Todos List</h3>
            <div className="container d-flex" style={myStyle}>
                {props.todos.length === 0 ? "No Todo's To Display" :
                    props.todos.map((todo) => {
                        return (
              
                            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
              
              
                        )
                    })

                }
            </div>
        </>
    )}
