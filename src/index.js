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

  const { handleChange, values } = useFormValidation(INITIAL_STATE);

  function handleSubmit(event) {
    event.preventDefault();
    console.log('authenticated!', values.email, values.password);
  }

  return (
    <div className="container">
      <h1>log in </h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="email"
          value={values.email}
          autoComplete="off"
          placeholder="Enter email address"
        />
        <input
          onChange={handleChange}
          name="password"
          type="password"
          value={values.password}
          placeholder="Enter password"
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Register />, rootElement);
