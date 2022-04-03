import { render, screen } from '@testing-library/react';
import PersonListItem from './PersonListItem';

describe('PersonListItem', () => {
    it('renders correctly', async () => {
        render(
            <PersonListItem
                person={{
                    name: {
                        first: 'John',
                        last: 'Doe',
                    },
                    dob: {
                        date: '1971-12-18T00:01:50.147Z',
                    },
                    picture: {
                        thumbnail: 'https://someurl.com',
                    },
                }}
            />,
        );

        const thumbnailElement = screen.getByRole('img');
        expect(thumbnailElement.getAttribute('src')).toBe(
            'https://someurl.com',
        );

        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('18-12-1971')).toBeInTheDocument();
    });
});
