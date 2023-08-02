import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getFollowers, getOrganizations, Organization, getRepos, Repo, User } from "utils/api";

import "./user-page.css";

function UserPage() {
    const [user, setUser] = useState<User>();
    const [repos, setRepos] = useState<Repo[]>();
    const [organizations, setOrganizations] = useState<Organization[]>();
    const [followers, setFollowers] = useState<User[]>();
    const location = useLocation();
    const backgroundStyle = {
        backgroundImage: `url(${location.state.user.avatar_url})`
    };

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
        <div className="up-main" style={backgroundStyle}>
            { user &&
                <div className="up-panel up-user-panel">
                    <img src={user.avatar_url} className="up-avatar" />
                    <div>{user.login}</div>
                </div>
            }
            { organizations &&
                <div className="up-panel">
                    <div>Organizations</div>
                    { organizations.map(org => (
                        <div key={org.url} className="up-small-listing">
                            <img className="up-mini-avatar" src={org.avatar_url} />
                            <div className="up-listing-name">
                                {org.login}
                            </div>
                            <div className="up-listing-description">{org.description}</div>
                        </div>
                    )) }
                </div>
            }
            { followers &&
                <div></div>
            }
            { repos &&
                <div className="up-panel">
                    <div>GitHub repos</div>
                    { repos.map(repo => (
                        <a key={repo.url} className="up-small-listing" href={repo.html_url}>
                            <img className="up-mini-avatar" src={repo.owner.avatar_url} />
                            <div className="up-listing-name">
                                {repo.owner.login}/{repo.name}
                            </div>
                        </a>
                    )) }
                </div>
            }
        </div>
    );
}

export default UserPage;
