import UserMenu from '../UserMenu/UserMenu';
import { getIsLoggedIn, getUserName } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Navbar, Container, Nav } from 'react-bootstrap';
import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const userEmail = useSelector(getUserName);

    return (
        <>
            <Navbar
                bg="primary"
                variant="dark"
                sticky="top"
                className={s.navigation}
            >
                <Container>
                    <Navbar.Brand exact="true" to="/">
                        Phonebook
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <div className={s.navigationBar}>
                            {/* <div className={s.main}> */}

                            {/* <Nav.Link exact="true" href="/" className={s.home} eventKey={2}>
                Home
              </Nav.Link> */}
                            <NavLink
                                exact
                                to="/"
                                className={s.navLink}
                                activeClassName={s.navLinkActive}
                            >
                                Home
                            </NavLink>
                            {/* </div> */}

                            {isLoggedIn ? (
                                <div className={s.greetingsBox}>
                                    <NavLink
                                        to="/contacts"
                                        className={s.navLink}
                                        activeClassName={s.navLinkActive}
                                    >
                                        Phonebook
                                    </NavLink>
                                    {/* <Nav.Link href="/contacts" className={s.phonebook}>
                    Phonebook
                  </Nav.Link> */}
                                    <UserMenu
                                        userMail={userEmail}
                                        className={s.userMenu}
                                    />
                                </div>
                            ) : (
                                <div className={s.entrance}>
                                    <NavLink
                                        exact
                                        to="/login"
                                        className={s.navLink}
                                        activeClassName={s.navLinkActive}
                                    >
                                        LogIn
                                    </NavLink>
                                    {/* <Nav.Link exact="true" href="/login" eventKey={2}>
                    LogIn
                  </Nav.Link> */}
                                    <NavLink
                                        to="/register"
                                        className={s.navLink}
                                        activeClassName={s.navLinkActive}
                                    >
                                        Registration
                                    </NavLink>
                                    {/* <Nav.Link href="/register" eventKey={2}>
                    Registration
                  </Nav.Link> */}
                                </div>
                            )}
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
