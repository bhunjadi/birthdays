import './PersonList.scss';
import { useNavigate } from 'react-router-dom';
import { formatBirthDate, getPersonName } from '../utils/personUtils';
import PERSON_PROP_TYPE from '../utils/personPropType';
import PersonImage from '../components/PersonImage';

function PersonListItem({ person }) {
    const navigate = useNavigate();

    return (
        <div
            className="person-list-item"
            data-testid="person"
            role="button"
            tabIndex={0}
            aria-hidden="true"
            onClick={() => {
                navigate('/profile', {
                    state: {
                        person,
                    },
                });
            }}
        >
            <PersonImage person={person} />

            <div className="person-details">
                <div className="person-name">{getPersonName(person)}</div>
                <div className="person-birthday">
                    {formatBirthDate(new Date(person.dob.date))}
                </div>
            </div>
        </div>
    );
}

PersonListItem.propTypes = {
    person: PERSON_PROP_TYPE.isRequired,
};

export default PersonListItem;
