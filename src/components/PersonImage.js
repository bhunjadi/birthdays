import './PersonImage.scss';
import PropTypes from 'prop-types';
import PERSON_PROP_TYPE from '../utils/personPropType';
import { getPersonName } from '../utils/personUtils';

function PersonImage({ person, size }) {
    return (
        <div className="person-image">
            <img src={person.picture[size]} alt={getPersonName(person)} />
        </div>
    );
}

PersonImage.propTypes = {
    person: PERSON_PROP_TYPE.isRequired,
    size: PropTypes.string,
};

PersonImage.defaultProps = {
    size: 'thumbnail',
};

export default PersonImage;
