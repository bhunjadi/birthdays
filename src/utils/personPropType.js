import PropTypes from 'prop-types';

const PERSON_PROP_TYPE = PropTypes.shape({
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
});

export default PERSON_PROP_TYPE;
