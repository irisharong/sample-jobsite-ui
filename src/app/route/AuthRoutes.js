import React from 'react';
import {Redirect} from 'react-router-dom';

const AuthRoutes = ({ children }) => {
    // get token localstorage
    // or create a status login jwt session
    const user = localStorage.getItem('user');

    if (!user) {
        return <Redirect to='/login' />;
    }

    return children;
};

export default AuthRoutes