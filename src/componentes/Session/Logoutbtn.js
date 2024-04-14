import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Logoutbtn = () => {
    const { logout } = useAuth0();
    
    return (
        <div className="container">
            <div className="row justify-content-center mt-4">
                <div className="col-md-4">
                    <button className="btn btn-danger btn-lg btn-block" onClick={() => logout()}>Cerrar sesión</button>
                </div>
            </div>
        </div>
    );
}

export default Logoutbtn;
