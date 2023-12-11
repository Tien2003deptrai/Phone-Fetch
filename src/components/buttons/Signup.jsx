import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Signup = () => {
    const navigate = useNavigate();
    const { signup } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleSignupClick = async (e) => {
        e.preventDefault();

        try {
            const success = await signup({ name, email, password });

            if (success) {
                console.log('Signup successful!');
                navigate('/login');
            } else {
                console.log('Signup failed. Email already exists!');
            }
        } catch (error) {
            console.log('An error occurred during signup. ', error.message);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0">Signup</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSignupClick}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
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
                                <button type="submit" className="btn btn-primary w-100">Signup</button>
                            </form>
                            <div className="mt-3">
                                <p>Already have an account? <button onClick={handleLoginClick} className="btn btn-link">Login</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
