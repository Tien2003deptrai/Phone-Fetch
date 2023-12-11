import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import CartBtn from './buttons/CartBtn';
import UserInformation from './buttons/UserInformation';
import { useAuth } from './buttons/AuthContext';

const Navbar = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'black' }}>
                <div className="container-fluid py-2">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/products">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <NavLink className="navbar-brand mx-auto fw-bold text-white" to="/">APPLE MART</NavLink>
                        <div className="d-flex">
                            {user ? (
                                <UserInformation user={user} />
                            ) : (
                                <>
                                    {!user && <button onClick={handleLoginClick} className="btn btn-outline-primary text-white">Login</button>}
                                </>
                            )}
                            <CartBtn />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
