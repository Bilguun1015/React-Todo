import React from "react";

const Todo = props => {
    return (
        <li
            className={`task${props.item.completed ? ' completed' : ''}`}
            onClick = {() => props.toggleItem(props.item.id)}
        >
            <p>{props.item.task}</p>
        </li>
    )
}

export default Todo;