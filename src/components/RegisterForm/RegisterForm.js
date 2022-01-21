import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';

export default function RegisterForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeInput = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const onSubmitRegister = e => {
        e.preventDefault();
        dispatch(register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };
    return (
        <div>
            <Form onSubmit={onSubmitRegister}>
                <Form.Group className="mb-3" controlId="floatingTextarea">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="name"
                        required
                        value={name}
                        onChange={onChangeInput}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        required
                        value={email}
                        onChange={onChangeInput}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        required
                        value={password}
                        onChange={onChangeInput}
                    />
                </Form.Group>
                <Button variant="outline-primary" type="submit">
                    Registration
                </Button>
            </Form>
        </div>
    );
}
