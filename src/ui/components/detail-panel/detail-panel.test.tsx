import { render, screen } from '@testing-library/react';
import DetailPanel from "./detail-panel";

const title = "Just Testing";
const malcolm = { name: "Malcolm", description: "Reynolds" };
const zoe = { name: "Zoe", link: "www.google.com", image: "not.an.image" };
const entries = [malcolm, zoe];

describe("detail panel", () => {
    test("renders", () => {
        render(<DetailPanel title={title} />);
        expect(screen.getByText(title)).toBeInTheDocument();
    });

    test("renders with entry", () => {
        render(<DetailPanel title={title} entries={entries} />);
        expect(screen.getByText(malcolm.name)).toBeInTheDocument();
        expect(screen.getByText(malcolm.description)).toBeInTheDocument();
        expect(screen.getByRole('img')).toHaveAttribute('src', zoe.image);
        expect(screen.getByRole('img')).toHaveAttribute('alt', 'small avatar');
    });
});
