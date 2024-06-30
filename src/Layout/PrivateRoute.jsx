/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../authentication/AuthSharer";
import Loading from "../Common/Loading";


const PrivateRoute = ({ children }) => {
    const { user,loading } = useContext(AuthContext)
    const location = useLocation()
    
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to='/login' state={location.pathname}></Navigate>
    }
    if (user) {
        return children
    }

};

export default PrivateRoute;