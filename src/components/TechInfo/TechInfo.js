import PropTypes from 'prop-types';

const TechInfo = ({ message }) => <h2>{message}</h2>;

TechInfo.propTypes = {
    message: PropTypes.string.isRequired,
};

export default TechInfo;
