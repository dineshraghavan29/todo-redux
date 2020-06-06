import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../actionTypes";
import { getTodos } from "../../services/fakeTodoService";

const initialState = {
  todos: getTodos(),
  module: "Todo",
  data: {
    action: "",
    dateAdded: "",
    key: "",
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const todos = [...state.todos];
      const todo = { ...action.payload.content };
      todo.key = Math.floor(Math.random() * 1000).toString();
      todos.push(todo);
      return { ...state, todos: todos };
    }
    case UPDATE_TODO: {
      const todos = [...state.todos];
      const todo = { ...action.payload.content };
      const index = todos.findIndex((t) => t.key === todo.key);
      todos[index].action = todo.action;
      todos[index].dateAdded = todo.dateAdded;
      return { ...state, todos: todos };
    }
    case DELETE_TODO: {
      const todos = [...state.todos];
      const filteredtodos = todos.filter(
        (todo) => todo.key !== action.payload.id
      );
      return { ...state, todos: filteredtodos };
    }
    default:
      return state;
  }
}
