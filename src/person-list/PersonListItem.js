import PropTypes from 'prop-types';
import './PersonList.scss';
import { formatBirthDate, getPersonName } from '../utils/personUtils';

function PersonListItem({ person }) {
    return (
        <div className="person-list-item" data-testid="person">
            <div className="thumbnail">
                <img
                    src={person.picture.thumbnail}
                    alt={getPersonName(person)}
                />
            </div>

            <div className="person-details">
                <div className="person-name">{getPersonName(person)}</div>
                <div className="person-birthday">
                    {formatBirthDate(new Date(person.dob.date))}
                </div>
            </div>
        </div>
    );
}

PersonListItem.propTypes = PropTypes.shape({
    name: PropTypes.shape({
        title: PropTypes.string.isRequired,
        first: PropTypes.string.isRequired,
        last: PropTypes.string.isRequired,
    }).isRequired,
    dob: PropTypes.shape({
        date: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
    }).isRequired,
    picture: PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
    }),
}).isRequired;

export default PersonListItem;
