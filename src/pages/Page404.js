import React from 'react';
import { NavLink } from 'react-router-dom';

// Composant affichant une page d'erreur 404
const Page404 = () => {
    return (
        <div className='error-container'>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <NavLink to='/'>Retourner sur la page d'accueil</NavLink>
        </div>
    );
};

export default Page404;