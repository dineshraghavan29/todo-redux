export const todos = [
  {
    key: "1",
    action: "Buy Phone",
    dateAdded: "06-06-2020",
  },
  {
    key: "2",
    action: "Buy Laptop",
    dateAdded: "06-06-2020",
  },
];

export function getTodos() {
  return todos.filter((u) => u);
}
