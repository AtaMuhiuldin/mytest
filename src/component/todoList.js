import { Component } from "react";
import React from "react";
import { connect } from "react-redux";
import Todo from "./todo";
class TodoList extends Component {
  render() {
    return (
      <div>
        <h1>TodoList</h1>

        {this.props.list.map(ls => <Todo todo={ls} />)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.listReducer.myList
});

export default connect(mapStateToProps, null)(TodoList);
