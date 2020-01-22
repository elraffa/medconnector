import React, { Fragment } from 'react';

const Register = () => {
  return (
    <Fragment>
      <h1 className='large text-primary'>Registro</h1>
      <p className='lead'>
        <i className='fas fa-user-md'></i> Crear una cuenta
      </p>
      <form action='dashboard.html' className='form'>
        <div className='form-group'>
          <input type='text' placeholder='Nombre' required />
        </div>
        <div className='form-group'>
          <input type='email' placeholder='Email' />
          <small className='form-text'>
            Este sitio usa Gravatar, si tenés un email asociado con Gravatar
            ingresalo
          </small>
        </div>
        <div className='form-group'>
          <input type='password' placeholder='Contraseña' minLength='6' />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirme la contraseña'
            minLength='6'
          />
        </div>
        <input type='submit' value='Enviar' className='btn btn-primary' />
      </form>
      <div className='my-1'>
        ¿Ya tenés una cuenta? <a href='login.html'>Login</a>
      </div>
    </Fragment>
  );
};

export default Register;
