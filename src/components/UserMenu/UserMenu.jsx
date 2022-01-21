import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';
import { Button } from 'react-bootstrap';
import s from './UserMenu.module.css';
import PropTypes from 'prop-types';

export default function UserMenu({ userMail }) {
    const dispatch = useDispatch();
    const onBtnClick = e => {
        dispatch(logOut());
    };
    return (
        <div className={s.navGreetings}>
            <p className={s.greetings}>Hello, {userMail}</p>
            <Button
                variant="outline-light"
                onClick={onBtnClick}
                className={s.button}
            >
                Log out
            </Button>
        </div>
    );
}

UserMenu.propTypes = {
    userMail: PropTypes.string.isRequired,
};
