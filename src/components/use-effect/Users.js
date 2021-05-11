import useFetch from '../custom-hook/useFetch';

function Users() {
  const { loading, data, error } = useFetch(`https://api.github.com/users`);

    if(loading) {
        return (<h1>Loading...</h1>);
    }

    if(error) {
        return (<pre>{JSON.stringify(error, null, 2)}</pre>);
    }

  return data ? (
    <>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </>
  ) : (
    <p>No users!</p>
  );
}

export default Users;
