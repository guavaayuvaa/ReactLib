import { useGetUsersQuery } from "../api/userApi";

const DerivedStateDisplay = () => {
  const { data: users } = useGetUsersQuery();

  const totalUsers = users?.length ?? 0;
  const longNameCount = users?.filter((u) => u.name.length > 12).length ?? 0;

  return (
    <div className="mt-4">
      <p>Total users: {totalUsers}</p>
      <p>Users with long names: {longNameCount}</p>
    </div>
  );
};

export default DerivedStateDisplay;
