import { useEffect, useState } from "react";
import { getUsers, User } from "utils/api";
import UserList from "ui/components/user-list/user-list";

function Home() {
    const [userList, setUserList] = useState<User[]>();

    useEffect(() => {
        getUsers().then((result: User[]) => { setUserList(result); });
    }, []);

    return (
        <>
            { userList && <UserList users={userList} /> }
        </>
    );
}

export default Home;
