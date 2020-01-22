import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Las contraseñas no coinciden');
    } else {
      console.log('success');
    }
  };
  return (
    <Fragment>
      <h1 className='large text-primary'>Registro</h1>
      <p className='lead'>
        <i className='fas fa-user-md'></i> Crear una cuenta
      </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Nombre'
            name='name'
            value={name}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
          />
          <small className='form-text'>
            Este sitio usa Gravatar, si tenés un email asociado con Gravatar
            ingresalo
          </small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Contraseña'
            minLength='6'
            name='password'
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirme la contraseña'
            minLength='6'
            name='password2'
            value={password2}
            onChange={e => onChange(e)}
          />
        </div>
        <input type='submit' value='Enviar' className='btn btn-primary' />
      </form>
      <div className='my-1'>
        ¿Ya tenés una cuenta? <Link to='/login'>Login</Link>
      </div>
    </Fragment>
  );
};

export default Register;
