import PropTypes from 'prop-types';

function ErrorText({ message }) {
    return <div>{message}</div>;
}

ErrorText.propTypes = {
    message: PropTypes.string.isRequired,
};

export default ErrorText;
