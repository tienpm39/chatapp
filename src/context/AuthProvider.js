import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Spin } from 'antd';
import { auth } from '../firebase/config';

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {

    const history = useHistory();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    React.useEffect(() => {
        const unsubscibed = auth.onAuthStateChanged((user) => {
            if (user) {
                const { displayName, email, uid, photoURL } = user;
                setUser({
                    displayName, email, uid, photoURL
                });
                setIsLoading(false);
                history.push('/');
                return;
            }
            setIsLoading(false);
            history.push('/login');
        })
        return () => {
            unsubscibed();
        }
    }, [history]);

    return (
        <AuthContext.Provider value={{ user }}>
            {isLoading ? <Spin /> : children}
        </AuthContext.Provider>
    )
}
