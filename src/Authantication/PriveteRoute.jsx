import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import Looding from './Looding';
import { Navigate, useLocation } from 'react-router';

const PriveteRoute = ({children}) => {
    const {looding, currentUser} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    if(looding){
        return <Looding></Looding>
    }
    if(!currentUser){
        return <Navigate to='/login'state={location.pathname}></Navigate>
        
    }

    if(currentUser){
        return children
    }
   
};

export default PriveteRoute;