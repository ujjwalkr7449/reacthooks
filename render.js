//Usually using map():

const users = ["A", "B", "C"];

return (
  <ul>
    {users.map((user) => (
      <li key={user}>{user}</li>
    ))}
  </ul>
);