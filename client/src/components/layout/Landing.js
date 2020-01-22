import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>MedConnector</h1>
          <p className='lead'>
            Crear un perfil, compartir información y conectarse con otros
            médicos electrofisiólogos
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Registrarse
            </Link>
            <Link to='/login' className='btn btn'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
