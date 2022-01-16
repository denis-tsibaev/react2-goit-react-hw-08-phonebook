import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import Section from './components/Section';
import TechInfo from './components/TechInfo';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import { getCurrentUser } from './redux/auth/auth-operations';
import {
    getError,
    getIsCurrentUser,
    getIsLoading,
} from './redux/auth/auth-selectors';
import ContactsPage from './views/ContactsPage';

export default function App() {
    const dispatch = useDispatch();
    const currentUser = useSelector(getIsCurrentUser);
    const error = useSelector(getError);
    const isLoading = useSelector(getIsLoading);

    useEffect(() => {
        dispatch(getCurrentUser());
    }, [dispatch]);

    return (
        <div className="appDiv">
            {currentUser ? (
                <Section title="Phonebook"></Section>
            ) : (
                <>
                    <Navigation />
                    <Switch>
                        <PublicRoute exact path="/">
                            <Section title="Welcome to phonebook!"></Section>
                        </PublicRoute>
                        <PublicRoute
                            exact
                            path="/register"
                            restricted
                            redirectTo="/contacts"
                        >
                            <Section title="Registration">
                                <RegisterForm />
                                {isLoading && <TechInfo message={'Loading'} />}
                                {error && <TechInfo message={'error'} />}
                            </Section>
                        </PublicRoute>
                        <PublicRoute
                            path="/login"
                            restricted
                            redirectTo="/contacts"
                        >
                            <Section title="Login">
                                <LoginForm />
                                {isLoading && <TechInfo message={'Loading'} />}
                                {error && <TechInfo message={error} />}
                            </Section>
                        </PublicRoute>
                        <PrivateRoute path="/contacts" redirectTo="/login">
                            {isLoading ? (
                                <TechInfo message={'Loading'} />
                            ) : (
                                <ContactsPage />
                            )}
                        </PrivateRoute>
                    </Switch>
                </>
            )}
        </div>
    );
}
