import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../users/usersSlice';

const Users = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log('Users:', users);
  console.log('Is Loading:', isLoading);
  console.log('Error:', error);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (users.length === 0) {
    return <p>No users found</p>;
  }

  return (
    <div>
      <h1>Random Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.login.uuid}>
            {user.name.first} {user.name.last}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
