import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getFollowers, getOrganizations, Organization, getRepos, Repo, User } from "utils/api";
import UserDetails from "ui/components/user-details/user-details";

function UserPage() {
    const [user, setUser] = useState<User>();
    const [repos, setRepos] = useState<Repo[]>();
    const [organizations, setOrganizations] = useState<Organization[]>();
    const [followers, setFollowers] = useState<User[]>();
    const location = useLocation();

    useEffect(() => {
        const { user } = location.state;
        setUser(user);
        getRepos(user.repos_url)
            .then(data => { setRepos(data); });
        getOrganizations(user.organizations_url)
            .then(data => { setOrganizations(data); })
        getFollowers(user.followers_url)
            .then(data => { setFollowers(data); })
    }, [])

    return (
        <UserDetails user={user} organizations={organizations} followers={followers} repos={repos} />
    );
}

export default UserPage;
