import { Component } from "react";
import React from "react";
import { updateTodo, deleteTodo } from "../actions/listActions";
import { connect } from "react-redux";
import MyTodo from "../myTodo";

class Todo extends Component {
  componentWillMount() {
    this.setState({ data: this.props.todo.data });
  }
  state = {
    data: ""
  };

  render() {
    return (
      <div>
        {this.props.todo.editingMode
          ? <input
              type="text"
              onChange={e => {
                this.setState({ data: e.target.value });
              }}
              value={this.state.data}
            />
          : <span>data</span>}

        <button
          onClick={() =>
            this.props.updateTodo(
              new MyTodo(this.props.todo._id, this.state.data, true)
            )}
        >
          Edit
        </button>
        <button>Delete</button>
      </div>
    );
  }
}

export default connect(null, { updateTodo, deleteTodo })(Todo);
