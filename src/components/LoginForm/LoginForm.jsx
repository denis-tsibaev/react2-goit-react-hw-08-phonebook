import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';

export default function LoginForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = event => {
        const { name, value } = event.target;
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    };

    const handleLoginSubmit = event => {
        event.preventDefault();
        dispatch(logIn({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <Form onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    required
                    value="email"
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Button variant="outline-primary" type="submit">
                Log in
            </Button>
        </Form>
    );
}
