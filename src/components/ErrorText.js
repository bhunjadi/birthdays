import PropTypes from 'prop-types';

function ErrorText({ message }) {
    return <div data-testid="fetchError">{message}</div>;
}

ErrorText.propTypes = {
    message: PropTypes.string.isRequired,
};

export default ErrorText;
