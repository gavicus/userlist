import { render, screen } from '@testing-library/react';
import UserDetails from "./user-details";
import { TEST_ORGS, TEST_REPOS, TEST_USERS } from "utils/api";

describe("user details", () => {
    test("component shows user", () => {
        render(<UserDetails user={TEST_USERS[0]} />);
        expect(screen.getByText(TEST_USERS[0].login)).toBeInTheDocument();
    });

    test("component shows organizations", () => {
        render(<UserDetails organizations={TEST_ORGS} />);
        TEST_ORGS.forEach(org => {
            expect(screen.getByText(org.login)).toBeInTheDocument();
            expect(screen.getByText(org.description)).toBeInTheDocument();
        });
    });

    test("component shows repos", () => {
        render(<UserDetails repos={TEST_REPOS} />);
        TEST_REPOS.forEach(repo => {
            const repoName = `${repo.owner.login}/${repo.name}`;
            expect(screen.getByText(repoName)).toBeInTheDocument();
        });
    });

    test("component shows followers", () => {
        render(<UserDetails followers={TEST_USERS} />);
        TEST_USERS.forEach(follower => {
            expect(screen.getByText(follower.login)).toBeInTheDocument();
        });
    });
});
