import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/actions';
import { USERS } from '../../data/data';
import { useDispatch } from 'react-redux';

const Login = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const success = await login(email, password);

            if (success) {
                console.log('Login successful!');
                const loggedInUser = USERS.find(user => user.email === email);
                dispatch(loginUser(loggedInUser));
                navigate('/');
            } else {
                console.error('Login failed. Invalid email or password.');
            }
        } catch (error) {
            console.error('An error occurred during login:', error.message);
        }
    };

    const handleSignupClick = () => {
        navigate('/signup');
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0">Login</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        aria-describedby="emailHelp"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                                    <label className="form-check-label" htmlFor="rememberMe">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Login</button>
                            </form>
                            <div className="mt-3">
                                <p>Don't have an account? <button onClick={handleSignupClick} className="btn btn-link">Signup</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
