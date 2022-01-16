import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';
// import style from './UserMenu.module.css';

export default function UserMenu({}) {
    const dispatch = useDispatch();
    const onBtnClick = event => {
        dispatch(logOut());
    };

    return (
        <div>
            <p>Hello, {}</p>
            <Button variant="outline-light" onClick={onBtnClick}>
                Logout
            </Button>
        </div>
    );
}

UserMenu.propTypes = {
    userMail: PropTypes.string.isRequired,
};
