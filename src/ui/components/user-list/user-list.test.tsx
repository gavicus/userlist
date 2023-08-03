import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserList from "./user-list";
import { TEST_USERS } from "utils/test-data";

describe('user list', () => {
    test('renders user list', async () => {
        render(
            <BrowserRouter>
                <UserList users={ TEST_USERS } />
            </BrowserRouter>
        );
        TEST_USERS.forEach((testUser) => {
            expect(screen.getByText(testUser.login)).toBeInTheDocument();
        })
    });
});
