import React, { useCallback, useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [authState, setAuthState] = useState("login");

  const toggleAuthState = useCallback(() => {
    setAuthState((prevAuthState) =>
      prevAuthState === "login" ? "register" : "login"
    );
  }, []);

  function setNameHandler(e: any) {
    setName(e.target.value);
  }

  function setEmailHandler(e: any) {
    setEmail(e.target.value);
  }

  function setPasswordHandler(e: any) {
    setPassword(e.target.value);
  }

  return (
    <div>
      <h2>{authState === "login" ? "Sign In" : "Register"}</h2>

      {/* NAME */}
      {authState === "register" && (
        <>
          <label htmlFor='name'>Name</label>
          <input
            className='border-2 border-black'
            type='text'
            name=''
            id='name'
            value={name}
            onChange={setNameHandler}
          />
          <br />
        </>
      )}

      {/* EMAIL */}
      <label htmlFor='email'>Email</label>
      <input
        className='border-2 border-black'
        type='email'
        name=''
        id='email'
        value={email}
        onChange={setEmailHandler}
      />
      <br />

      {/* PASSWORD */}
      <label htmlFor='password'>Password</label>
      <input
        className='border-2 border-black'
        type='password'
        name=''
        id='password'
        value={password}
        onChange={setPasswordHandler}
      />
      <br />

      <button className='border-2 border-black'>
        {authState === "login" ? "Login" : "Sign Up"}
      </button>
      <p onClick={toggleAuthState}>
        {authState === "login"
          ? "First time? Create an account"
          : "Have an account? Login"}
      </p>
    </div>
  );
};

export default Auth;
