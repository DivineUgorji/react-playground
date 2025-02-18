import ProfileCard from "./Card";
import users from "../usersData";

function App() {
  return (
    <ul>
      {users.map((user) => (
        <ProfileCard
          key={user.id}
          image={user.image}
          name={user.name}
          title={user.title}
          message={user.message}
        />
      ))}
      ;
    </ul>
  );
}

export default App;
