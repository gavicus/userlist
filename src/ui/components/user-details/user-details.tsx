import { Organization, Repo, User } from "utils/api";

import "./user-details.css";

interface UserDetailsAttrs {
    user?: User;
    organizations?: Organization[];
    followers?: User[];
    repos?: Repo[];
}

function UserDetails({user, organizations, followers, repos}: UserDetailsAttrs) {
    return (
        <div className="ud-main">
            <div className="ud-column ud-left-column">
                { user &&
                    <div className="ud-panel ud-user-panel">
                        <img src={user.avatar_url} className="ud-avatar" />
                        <div className="ud-login">{user.login}</div>
                    </div>
                }
                { organizations &&
                    <div className="ud-panel">
                        <div>Organizations</div>
                        { organizations.map(org => (
                            <div key={org.url} className="ud-small-listing">
                                <img className="ud-mini-avatar" src={org.avatar_url} />
                                <div className="ud-listing-name">
                                    {org.login}
                                </div>
                                <div className="ud-listing-description">{org.description}</div>
                            </div>
                        )) }
                    </div>
                }
                { followers &&
                    <div className="ud-panel">
                        <div>Followers</div>
                        { followers.map(follower => (
                            <div key={follower.login} className="ud-small-listing">
                                <img className="ud-mini-avatar" src={follower.avatar_url} />
                                <div className="ud-listing-name">
                                    {follower.login}
                                </div>
                            </div>
                        )) }
                    </div>
                }
            </div>
            <div className="ud-column ud-right-column">
                { repos &&
                    <div className="ud-panel">
                        <div>GitHub repos</div>
                        { repos.map(repo => (
                            <a key={repo.url} className="ud-small-listing" href={repo.html_url}>
                                <img className="ud-mini-avatar" src={repo.owner.avatar_url} />
                                <div className="ud-listing-name">
                                    {repo.owner.login}/{repo.name}
                                </div>
                            </a>
                        )) }
                    </div>
                }
            </div>
        </div>
    );
}

export default UserDetails;
