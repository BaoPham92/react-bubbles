import React, { useState, useEffect } from "react";
import { axiosWithAuth } from './utils/axiosWithAuth';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credential, setCredential] = useState({
    username: '',
    password: ''
  });

  useEffect(() => {
    console.log('LOGIN FORM')
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
    .then(res => localStorage.setItem('token', res && res.data.payload))
    .catch(err => console.log(err))

    // * RESET UPON SUBMISSION
    setCredential({
      username: '',
      password: ''
    })
  }

  // ! LOG STATE
  // console.log(credential)

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
