import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ""
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitTask = e => {
        e.preventDefault();
        this.props.addTask(this.state.task)
    }

    render() {
        return(
            <>
                <form onSubmit = {this.submitTask}>
                    <input 
                        placeholder="add your task"
                        type="text"
                        value={this.state.task}
                        name="task"
                        onChange={this.handleChange}
                    />
                    <button className="addButton">Add</button>
                </form>
            </>
        )
    }
}

export default TodoForm