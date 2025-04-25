import carregarUsers from "./api"

export default async function Users() {
    const users = await carregarUsers()
    return (
      <div>
        <h1>Lista de users</h1>
        <ul>
          { users.map((user) => (
            <li key={user.id}>{user.id} - {user.name} | {user.email}</li>
          )) }
        </ul>
      </div>
    );
  }