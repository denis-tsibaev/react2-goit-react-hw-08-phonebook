import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';
export default function TechInfo({ message }) {
    return (
        <>
            <h2>{message}</h2>
            <Spinner animation="grow" variant="primary" />
        </>
    );
}

TechInfo.propTypes = {
    message: PropTypes.string,
};
