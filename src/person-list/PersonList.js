import { useEffect, useState } from 'react';
import ErrorText from '../components/ErrorText';
import Loader from '../components/Loader';
import { API_URL } from '../const';
import PersonListItem from './PersonListItem';

function PersonList() {
    const [persons, setPersons] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        setLoading(true);

        async function getData() {
            try {
                const res = await fetch(API_URL);
                const data = await res.json();
                setPersons(data.results);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <ErrorText message={error.message ?? 'Unknown error'} />;
    }

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {persons.map((person, index) => {
                return (
                    // We have to use index as a key since there is no valid property on person object
                    <PersonListItem
                        data-testid="person"
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        person={person}
                    />
                );
            })}
        </div>
    );
}

export default PersonList;
