import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getUsers, User } from "utils/api";

import "./home.css";

function Home() {
    const [userList, setUserList] = useState<User[]>();

    useEffect(() => {
        getUsers().then((result: User[]) => {
            setUserList(result);
        })
    }, []);

    return (
        <div>
            {
                userList &&
                <div className="h-user-list">
                    {userList.map(user => renderUser(user))}
                </div>
            }
        </div>
    );
}

function renderUser(user: User) {
    return (
        <Link className="h-user-listing" to="/user" state={{user}} key={user.login}>
            <img src={user.avatar_url} className="h-avatar" />
            <div className="h-user-login">{user.login}</div>
        </Link>
    );
}

export default Home;
