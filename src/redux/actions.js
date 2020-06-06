import * as actionTypes from "./actionTypes";

export const addTodo = (content) => ({
  type: actionTypes.ADD_TODO,
  payload: {
    content,
  },
});

export const updateTodo = (content) => ({
  type: actionTypes.UPDATE_TODO,
  payload: {
    content,
  },
});

export const deleteTodo = (id) => ({
  type: actionTypes.DELETE_TODO,
  payload: { id },
});

export const addUser = (content) => ({
  type: actionTypes.ADD_USER,
  payload: {
    content,
  },
});

export const updateUser = (content) => ({
  type: actionTypes.UPDATE_USER,
  payload: {
    content,
  },
});

export const deleteUser = (id) => ({
  type: actionTypes.DELETE_USER,
  payload: { id },
});
