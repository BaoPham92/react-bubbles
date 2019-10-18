import React, { useState, useEffect } from "react";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  useEffect(() => {
    // TODO: CREATE AXIOS CALL HERE FOR TOKEN IF CREDENTIALS ARE CORRECT!
    console.log('LOGIN FORM')
  }, [])

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    </>
  );
};

export default Login;
