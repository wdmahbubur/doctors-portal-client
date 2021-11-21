import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Loading from '../Loading/Loading';

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    let location = useLocation();
    if (loading) { return <Loading /> }
    if (user?.role !== "Admin") {
        return <Navigate to="/dashboard" state={{ from: location }} />
    }
    return children;
};

export default AdminRoute;