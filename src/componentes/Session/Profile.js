import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card mt-4">
                            <div className="card-body">
                                {/* Aplica la clase text-center para centrar horizontalmente el texto */}
                                <h1 className="card-title text-center mb-4">Mi Perfil</h1>
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src={user.picture} alt={user.name} className="card-img-top" style={{ maxWidth: '100%', height: 'auto' }} />
                                    </div>
                                    <div className="col-md-8">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th>Nombre:</th>
                                                    <td>{user.given_name}</td>
                                                </tr>
                                                <tr>
                                                    <th>Apellido:</th>
                                                    <td>{user.family_name}</td>
                                                </tr>
                                                <tr>
                                                    <th>Nickname:</th>
                                                    <td>{user.nickname}</td>
                                                </tr>
                                                <tr>
                                                    <th>Correo electrónico:</th>
                                                    <td>{user.email}</td>
                                                </tr>
                                                <tr>
                                                    <th>País:</th>
                                                    <td>{user.locale}</td>
                                                </tr>
                                                <tr>
                                                    <th>Última actualización:</th>
                                                    <td>{user.updated_at}</td>
                                                </tr>
                                                <tr>
                                                    <th>ID de usuario:</th>
                                                    <td>{user.sub}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default Profile;
