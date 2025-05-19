import { useGetUsersQuery } from "../api/userApi";

const UserList = () => {
  const { data: users, isLoading } = useGetUsersQuery();

  if (isLoading) return <p>Loading users...</p>;

  return (
    <ul className="list-disc ml-6">
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;

