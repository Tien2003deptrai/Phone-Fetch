import React from 'react';
import { useAuth } from './AuthContext';

const UserInformation = ({ user }) => {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <div className="me-3 user-information">
            <span className="text-white me-4">{user.name}</span>
            <button className="btn btn-outline-primary" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default UserInformation;
