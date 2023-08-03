export interface User {
    login: string;
    avatar_url: string;
    repos_url: string;
    organizations_url: string;
    followers_url: string;
    [key: string]: string | number | boolean;
}

export const TEST_USERS: User[] = [
    {
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        events_url: "https://api.github.com/users/mojombo/events{/privacy}",
        followers_url: "https://api.github.com/users/mojombo/followers",
        following_url: "https://api.github.com/users/mojombo/following{/other_user}",
        gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
        gravatar_id: "",
        html_url: "https://github.com/mojombo",
        id: 1,
        login: "mojombo",
        node_id: "MDQ6VXNlcjE=",
        organizations_url: "https://api.github.com/users/mojombo/orgs",
        received_events_url: "https://api.github.com/users/mojombo/received_events",
        repos_url: "https://api.github.com/users/mojombo/repos",
        site_admin: false,
        starred_url: "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/mojombo/subscriptions",
        type: "User",
        url: "https://api.github.com/users/mojombo",
    },
    {
        avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
        events_url: "https://api.github.com/users/defunkt/events{/privacy}",
        followers_url: "https://api.github.com/users/defunkt/followers",
        following_url: "https://api.github.com/users/defunkt/following{/other_user}",
        gists_url: "https://api.github.com/users/defunkt/gists{/gist_id}",
        gravatar_id: "",
        html_url: "https://github.com/defunkt",
        id: 2,
        login: "defunkt",
        node_id: "MDQ6VXNlcjI=",
        organizations_url: "https://api.github.com/users/defunkt/orgs",
        received_events_url: "https://api.github.com/users/defunkt/received_events",
        repos_url: "https://api.github.com/users/defunkt/repos",
        site_admin: false,
        starred_url: "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/defunkt/subscriptions",
        type: "User",
        url: "https://api.github.com/users/defunkt",
    },
    {
        avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
        events_url: "https://api.github.com/users/pjhyett/events{/privacy}",
        followers_url: "https://api.github.com/users/pjhyett/followers",
        following_url: "https://api.github.com/users/pjhyett/following{/other_user}",
        gists_url: "https://api.github.com/users/pjhyett/gists{/gist_id}",
        gravatar_id: "",
        html_url: "https://github.com/pjhyett",
        id: 3,
        login: "pjhyett",
        node_id: "MDQ6VXNlcjM=",
        organizations_url: "https://api.github.com/users/pjhyett/orgs",
        received_events_url: "https://api.github.com/users/pjhyett/received_events",
        repos_url: "https://api.github.com/users/pjhyett/repos",
        site_admin: false,
        starred_url: "https://api.github.com/users/pjhyett/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/pjhyett/subscriptions",
        type: "User",
        url: "https://api.github.com/users/pjhyett",
    }
];
export function getUsers(): Promise<User[]> {
    return TEST_USERS
        ? new Promise((resolve, reject) => { resolve(TEST_USERS); })
        : fetch("https://api.github.com/users").then((response) => response.json())
}

interface RepoOwner {
    login: string, 
    id: number, 
    node_id: string, 
    avatar_url: string, 
    gravatar_id: string;
}
export interface Repo {
    name: string;
    url: string;
    owner: RepoOwner;
    html_url: string;
    [key: string]: string | number | boolean | object | null;
}
export const TEST_REPOS: Repo[] = [
    {
        allow_forking: true,
        archive_url: "https://api.github.com/repos/defunkt/ace/{archive_format}{/ref}",
        archived: false,
        assignees_url: "https://api.github.com/repos/defunkt/ace/assignees{/user}",
        blobs_url: "https://api.github.com/repos/defunkt/ace/git/blobs{/sha}",
        branches_url: "https://api.github.com/repos/defunkt/ace/branches{/branch}",
        clone_url: "https://github.com/defunkt/ace.git",
        collaborators_url: "https://api.github.com/repos/defunkt/ace/collaborators{/collaborator}",
        comments_url: "https://api.github.com/repos/defunkt/ace/comments{/number}",
        commits_url: "https://api.github.com/repos/defunkt/ace/commits{/sha}",
        compare_url: "https://api.github.com/repos/defunkt/ace/compare/{base}...{head}",
        contents_url: "https://api.github.com/repos/defunkt/ace/contents/{+path}",
        contributors_url: "https://api.github.com/repos/defunkt/ace/contributors",
        created_at: "2011-06-07T18:41:40Z",
        default_branch: "master",
        deployments_url: "https://api.github.com/repos/defunkt/ace/deployments",
        description: "Ajax.org Cloud9 Editor",
        disabled: false,
        downloads_url: "https://api.github.com/repos/defunkt/ace/downloads",
        events_url: "https://api.github.com/repos/defunkt/ace/events",
        fork: true,
        forks: 7,
        forks_count: 7,
        forks_url: "https://api.github.com/repos/defunkt/ace/forks",
        full_name: "defunkt/ace",
        git_commits_url: "https://api.github.com/repos/defunkt/ace/git/commits{/sha}",
        git_refs_url: "https://api.github.com/repos/defunkt/ace/git/refs{/sha}",
        git_tags_url: "https://api.github.com/repos/defunkt/ace/git/tags{/sha}",
        git_url: "git://github.com/defunkt/ace.git",
        has_discussions: false,
        has_downloads: true,
        has_issues: false,
        has_pages: false,
        has_projects: true,
        has_wiki: true,
        homepage: "http://ace.ajax.org",
        hooks_url: "https://api.github.com/repos/defunkt/ace/hooks",
        html_url: "https://github.com/defunkt/ace",
        id: 1861402,
        is_template: false,
        issue_comment_url: "https://api.github.com/repos/defunkt/ace/issues/comments{/number}",
        issue_events_url: "https://api.github.com/repos/defunkt/ace/issues/events{/number}",
        issues_url: "https://api.github.com/repos/defunkt/ace/issues{/number}",
        keys_url: "https://api.github.com/repos/defunkt/ace/keys{/key_id}",
        labels_url: "https://api.github.com/repos/defunkt/ace/labels{/name}",
        language: "JavaScript",
        languages_url: "https://api.github.com/repos/defunkt/ace/languages",
        license: {key: 'other', name: 'Other', spdx_id: 'NOASSERTION', url: null, node_id: 'MDc6TGljZW5zZTA='},
        merges_url: "https://api.github.com/repos/defunkt/ace/merges",
        milestones_url: "https://api.github.com/repos/defunkt/ace/milestones{/number}",
        mirror_url: null,
        name: "ace",
        node_id: "MDEwOlJlcG9zaXRvcnkxODYxNDAy",
        notifications_url: "https://api.github.com/repos/defunkt/ace/notifications{?since,all,participating}",
        open_issues: 0,
        open_issues_count: 0,
        owner: {
            login: 'defunkt', id: 2, node_id: 'MDQ6VXNlcjI=', 
            avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4', gravatar_id: ''
        },
        private: false,
        pulls_url: "https://api.github.com/repos/defunkt/ace/pulls{/number}",
        pushed_at: "2011-11-16T18:37:42Z",
        releases_url: "https://api.github.com/repos/defunkt/ace/releases{/id}",
        size: 4405,
        ssh_url: "git@github.com:defunkt/ace.git",
        stargazers_count: 16,
        stargazers_url: "https://api.github.com/repos/defunkt/ace/stargazers",
        statuses_url: "https://api.github.com/repos/defunkt/ace/statuses/{sha}",
        subscribers_url: "https://api.github.com/repos/defunkt/ace/subscribers",
        subscription_url: "https://api.github.com/repos/defunkt/ace/subscription",
        svn_url: "https://github.com/defunkt/ace",
        tags_url: "https://api.github.com/repos/defunkt/ace/tags",
        teams_url: "https://api.github.com/repos/defunkt/ace/teams",
        topics: [],
        trees_url: "https://api.github.com/repos/defunkt/ace/git/trees{/sha}",
        updated_at: "2022-02-13T21:24:30Z",
        url: "https://api.github.com/repos/defunkt/ace",
        visibility: "public",
        watchers: 16,
        watchers_count: 16,
        web_commit_signoff_required: false,
    }
];
export function getRepos(url: string): Promise<Repo[]> {
    return TEST_REPOS
        ? new Promise((resolve, reject) => { resolve(TEST_REPOS); })
        : fetch(url)
            .then(response => response.json())
            .then(data => { return data; })
}

export interface Organization {
    login: string;
    description: string;
    avatar_url: string;
    [key: string]: string | number;
}
export const TEST_ORGS: Organization[] = [
    {
        avatar_url: "https://avatars.githubusercontent.com/u/197655?v=4",
        description: "Logic-less templates.",
        events_url: "https://api.github.com/orgs/mustache/events",
        hooks_url: "https://api.github.com/orgs/mustache/hooks",
        id: 197655,
        issues_url: "https://api.github.com/orgs/mustache/issues",
        login: "mustache",
        members_url: "https://api.github.com/orgs/mustache/members{/member}",
        node_id: "MDEyOk9yZ2FuaXphdGlvbjE5NzY1NQ==",
        public_members_url: "https://api.github.com/orgs/mustache/public_members{/member}",
        repos_url: "https://api.github.com/orgs/mustache/repos",
        url: "https://api.github.com/orgs/mustache",
    }
];
export function getOrganizations(url: string): Promise<Organization[]> {
    return TEST_ORGS
    ? new Promise((resolve, reject) => resolve(TEST_ORGS))
    : fetch(url)
        .then(response => response.json())
        .then(data => data);
}

export function getFollowers(url: string): Promise<User[]> {
    return TEST_USERS
    ? new Promise((resolve, reject) => { resolve(TEST_USERS); })
    : fetch(url)
        .then(response => response.json())
        .then(data => data);
}
