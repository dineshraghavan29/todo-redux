import { ADD_USER, UPDATE_USER, DELETE_USER } from "../actionTypes";

const initialState = {
  users: [],
  module: "User",
  data: {
    name: "",
    email: "",
    key: "",
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      const users = [...state.users];
      const user = { ...action.payload.content };
      user.key = Math.floor(Math.random() * 1000).toString();
      users.push(user);
      return { ...state, users: users };
    }
    case UPDATE_USER: {
      const users = [...state.users];
      const user = { ...action.payload.content };
      const index = users.findIndex((t) => t.key === user.key);
      users[index].name = user.name;
      users[index].email = user.email;
      return { ...state, users: users };
    }
    case DELETE_USER: {
      const users = [...state.users];
      const filteredusers = users.filter(
        (user) => user.key !== action.payload.id
      );
      return { ...state, users: filteredusers };
    }
    default:
      return state;
  }
}
