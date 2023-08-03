import { Link } from 'react-router-dom';
import { User } from "utils/api";

import "./user-list.css";

interface UserListAttrs {
    users: User[];
}

function UserList({users}: UserListAttrs) {
    return (
        <div className="ul-main">
            { users.map(user => renderUser(user)) }
        </div>
    );
}

function renderUser(user: User) {
    return (
        <Link className="ul-user-listing" to="/user" state={{user}} key={user.login}>
            <img src={user.avatar_url} className="ul-avatar" />
            <div className="ul-user-login">{user.login}</div>
        </Link>
    );
}

export default UserList;
