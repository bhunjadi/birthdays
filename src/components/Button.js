import './Button.scss';
import PropTypes from 'prop-types';

function Button(props) {
    const { children, onClick } = props;
    return (
        <button className="btn" type="button" onClick={onClick}>
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.element.isRequired,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    onClick: () => {},
};

export default Button;
