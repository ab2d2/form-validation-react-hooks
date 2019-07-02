import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import useFormValidation from './useFormValidation';
import validateAuth from './validateAuth';

const INITIAL_STATE = {
  email: '',
  password: ''
};

function Register(props) {
  //   const [email, setEmail] = React.useState('');
  //   const [password, setPassword] = React.useState('');

  const { handleSubmit, handleChange, handleBlur, values, errors, isSubmitting } = useFormValidation(
    INITIAL_STATE,
    validateAuth
  );

  return (
    <div className="container">
      <h1>log in </h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          value={values.email}
          className={errors.email && 'error-input'}
          autoComplete="off"
          placeholder="Enter email address"
        />
        {errors.email && <p className="error-text">{errors.email}</p>}

        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="password"
          type="password"
          value={values.password}
          className={errors.password && 'error-input'}
          placeholder="Enter password"
        />
        {errors.password && <p className="error-text">{errors.password}</p>}
        <div>
          <button disabled={isSubmitting} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Register />, rootElement);
