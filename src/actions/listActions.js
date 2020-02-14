import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./type";

export const addTodo = todo => {
  const action = {
    type: ADD_TODO,
    payload: todo
  };
  return action;
};

export const deleteTodo = todo => {
  const action = {
    type: DELETE_TODO,
    payload: todo
  };
  return action;
};

export const updateTodo = todo => {
  const action = {
    type: UPDATE_TODO,
    payload: todo
  };
  return action;
};
