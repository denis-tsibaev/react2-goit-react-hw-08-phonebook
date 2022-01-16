import { Container, Nav, Navbar } from 'react-bootstrap';
import UserMenu from '../UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn, getUserName } from '../../redux/auth/auth-selectors';
import style from './Navigation.module.css';

export default function Navigation() {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const userEmail = useSelector(getUserName);

    return (
        <>
            <Navbar
                bg="primary"
                variant="dark"
                sticky="top"
                className={style.navigation}
            >
                <Container>
                    <Navbar.Brand exact="true" to="/">
                        Phonebook
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <div className={style.navigationBar}>
                            <NavLink
                                exact
                                to="/"
                                className={style.navLink}
                                activeClassName={style.navLinkActive}
                            >
                                Home
                            </NavLink>

                            {isLoggedIn ? (
                                <div className={style.greetingsBox}>
                                    <NavLink
                                        to="/contacts"
                                        className={style.navLink}
                                        activeClassName={style.navLinkActive}
                                    >
                                        Phonebook
                                    </NavLink>
                                    <UserMenu
                                        userMail={userEmail}
                                        className={style.userMenu}
                                    />
                                </div>
                            ) : (
                                <div className={style.entrance}>
                                    <NavLink
                                        exact
                                        to="/login"
                                        className={style.navLink}
                                        activeClassName={style.navLinkActive}
                                    >
                                        Log in
                                    </NavLink>
                                    <NavLink
                                        to="/register"
                                        className={style.navLink}
                                        activeClassName={style.navLinkActive}
                                    >
                                        Registration
                                    </NavLink>
                                </div>
                            )}
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
