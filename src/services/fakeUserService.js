export const users = [
  {
    key: "1",
    name: "Mike",
    email: "mike@gmail.com",
  },
  {
    key: "2",
    name: "John",
    email: "john@gmail.com",
  },
];

export function getUsers() {
  return users.filter((u) => u);
}
