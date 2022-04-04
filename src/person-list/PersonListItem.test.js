import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PersonListItem from './PersonListItem';

describe('PersonListItem', () => {
    it('renders correctly', async () => {
        render(
            <PersonListItem
                person={{
                    name: {
                        title: 'Mrs',
                        first: 'John',
                        last: 'Doe',
                    },
                    dob: {
                        date: '1971-12-18T00:01:50.147Z',
                        age: 51,
                    },
                    picture: {
                        thumbnail: 'https://someurl.com',
                    },
                }}
            />,
            {
                wrapper: MemoryRouter,
            },
        );

        const thumbnailElement = screen.getByRole('img', { hidden: true });
        expect(thumbnailElement.getAttribute('src')).toBe(
            'https://someurl.com',
        );

        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('18-12-1971')).toBeInTheDocument();
    });
});
