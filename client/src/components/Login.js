import React, { useState, useEffect } from "react";
import { axiosWithAuth } from './utils/axiosWithAuth';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
  
  const [credential, setCredential] = useState({
    username: '',
    password: ''
  });

  const token = localStorage.getItem('token')
  const history = props && props.history

  useEffect(() => {
    // ! LOG PROPS
    console.log('LOGIN FORM', props)
  }, [])

  const handleChange = (e) => {
    e.preventDefault();

    // * SET CREDENTIAL
    setCredential({
      ...credential,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // * CALL FOR LOGIN
    axiosWithAuth().post('api/login', credential)
      .then(res => {
        // * SET TOKEN
        localStorage.setItem('token', res && res.data.payload)

        // * CHANGE URL
        history.replace('/BubblePage');
      })
      .catch(err => console.log(err))

    // * RESET UPON SUBMISSION
    setCredential({
      username: '',
      password: ''
    })
  }

  // ! LOG STATE
  // console.log(credential)

  // * TOKEN ALREADY EXIST, REDIRECT
  if (!!token === true) {
    return <Redirect to="/BubblePage" />
  }

  return (
    <>
      <h1>Login in here</h1>
      <form onSubmit={(e) => handleSubmit(e)}>

        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => handleChange(e)}
          value={credential.username && credential.username} />

        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => handleChange(e)}
          value={credential.password && credential.password} />

        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
