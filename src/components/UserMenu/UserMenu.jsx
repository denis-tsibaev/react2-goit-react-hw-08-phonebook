import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export default function UserMenu({ UserMail }) {
    const dispatch = useDispatch();
    const onBtnClick = event => {
        dispatch(logOut());
    };

    return (
        <div>
            <p>Hello, {userMail}</p>
            <Button variant="outline-light" onClick={onBtnClick}>
                Logout
            </Button>
        </div>
    );
}

UserMenu.propTypes = {
    userMail: PropTypes.string.isRequired,
};
