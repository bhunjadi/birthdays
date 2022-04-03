import { render, screen, waitFor, within } from '@testing-library/react';
import PersonList from './PersonList';

const PERSON_1 = {
    name: {
        title: 'Miss',
        first: 'Pamela',
        last: 'Howell',
    },
    dob: {
        date: '1980-02-26T07:16:39.510Z',
        age: 42,
    },
};

const PERSON_2 = {
    name: {
        title: 'Mrs',
        first: 'Ilona',
        last: 'Lauri',
    },
    dob: {
        date: '1983-04-17T18:21:44.281Z',
        age: 39,
    },
};

// This is a helper method - fetch uses json() function which also returns a promise
function getFetchStub(data, error) {
    return function fetchStub() {
        if (data) {
            return Promise.resolve({
                json() {
                    return Promise.resolve(data);
                },
            });
        }

        return Promise.reject(error);
    };
}

describe('PersonList', () => {
    afterEach(() => {
        global.fetch.mockClear();
    });

    it('shows returned people from the API', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(
            getFetchStub({
                results: [PERSON_1, PERSON_2],
            }),
        );

        render(<PersonList />);

        // Excpecting loader to be present before fetch has returned
        expect(screen.getByTestId('loader')).toBeInTheDocument();

        await waitFor(() => expect(global.fetch).toHaveBeenCalled());

        // Only list of persons should be visible
        expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
        expect(screen.queryByTestId('fetchError')).not.toBeInTheDocument();

        const personElements = screen.getAllByTestId('person');
        expect(personElements.length).toBe(2);
    });

    it('shows an error', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(
            getFetchStub(null, new Error('Fetch error')),
        );

        render(<PersonList />);

        // Excpecting loader to be present before fetch has returned
        expect(screen.getByTestId('loader')).toBeInTheDocument();

        await waitFor(() => expect(global.fetch).toHaveBeenCalled());

        const errorElement = screen.getByTestId('fetchError');

        // Only error message should be present now
        expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
        expect(errorElement).toBeInTheDocument();

        expect(
            within(errorElement).getByText('Fetch error'),
        ).toBeInTheDocument();
    });
});
