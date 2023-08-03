import { Organization, Repo, User } from "utils/api";
import DetailPanel from "ui/components/detail-panel/detail-panel";

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
                    <div className="info-panel ud-user-panel">
                        <img src={user.avatar_url} className="ud-avatar" alt="large avatar" />
                        <div className="ud-login">{user.login}</div>
                    </div>
                }

                <DetailPanel
                    title="Organizations"
                    entries={organizations?.map(org => ({
                        name: org.login,
                        image: org.avatar_url,
                        description: org.description
                    }))}
                />

                <DetailPanel
                    title={`Followers: ${followers?.length}`}
                    entries={followers?.slice(0,5).map(f => ({
                        name: f.login,
                        image: f.avatar_url
                    }))}
                />
            </div>
            <div className="ud-column ud-right-column">
                <DetailPanel
                    title="GitHub repos"
                    entries={
                        repos?.map(r => ({
                            name: `${r.owner.login}/${r.name}`,
                            image: r.owner.avatar_url,
                            link: r.html_url
                        }))
                    }
                />
            </div>
        </div>
    );
}

export default UserDetails;
