import { useUsers } from '../hooks/useUsers';
import { User } from '../types';

function FetchUsers() {
    const { data: users, isLoading, error } = useUsers();
    
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading users</p>;

    return (
        <div>
            {users.map((user: User) => (
                <li key={user.id}>{user.name} {user.username}</li>
            ))}
        </div>
    );
}

export default FetchUsers;