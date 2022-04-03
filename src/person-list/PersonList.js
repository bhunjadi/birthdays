import { useEffect, useState } from 'react';
import ErrorText from '../components/ErrorText';
import Loader from '../components/Loader';
import { API_URL } from '../const';

function PersonList() {
    const [persons, setPersons] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        setLoading(true);

        async function getData() {
            try {
                const data = await (await fetch(API_URL)).json();
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
        <div>
            {persons.map((person, index) => {
                return (
                    <div data-testid={`person-${index}`}>
                        {person.name.first}
                    </div>
                );
            })}
        </div>
    );
}

export default PersonList;
