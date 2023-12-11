import { createContext, useContext, useState } from 'react';
import { USERS } from '../../data/data';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        const foundUser = USERS.find(user => user.email === email && user.password === password);

        if (foundUser) {
            setUser(foundUser);
            return true;
        } else {
            return false;
        }
    };

    const signup = (userInfo) => {
        if (USERS.some(user => user.email === userInfo.email)) {
            return false;
        }
        const newUser = { ...userInfo, id: USERS.length + 1 };
        USERS.push(newUser);

        setUser(newUser);
        return true;
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, signup }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
