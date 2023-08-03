export interface User {
    login: string;
    avatar_url: string;
    repos_url: string;
    organizations_url: string;
    followers_url: string;
    [key: string]: string | number | boolean;
}

export function getUsers(): Promise<User[]> {
    return fetch("https://api.github.com/users").then((response) => response.json())
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
export function getRepos(url: string): Promise<Repo[]> {
    return fetch(url)
        .then(response => response.json())
        .then(data => { return data; })
}

export interface Organization {
    login: string;
    description: string;
    avatar_url: string;
    [key: string]: string | number;
}
export function getOrganizations(url: string): Promise<Organization[]> {
    return fetch(url)
        .then(response => response.json())
        .then(data => data);
}

export function getFollowers(url: string): Promise<User[]> {
    return fetch(url)
        .then(response => response.json())
        .then(data => data);
}
