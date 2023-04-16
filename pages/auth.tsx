import axios from "axios";
import React, { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [authState, setAuthState] = useState("login");

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", { email, name, password });
      login();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }, [email, name, password, login]);

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
      <button
        onClick={authState === "login" ? login : register}
        className='border-2 border-black'
      >
        {authState === "login" ? "Login" : "Sign Up"}
      </button>
      <FcGoogle
        size={30}
        onClick={() => signIn("google", { callbackUrl: "/" })}
      />
      <FaGithub
        size={30}
        onClick={() => signIn("github", { callbackUrl: "/" })}
      />
      <p onClick={toggleAuthState}>
        {authState === "login"
          ? "First time? Create an account"
          : "Have an account? Login"}
      </p>
    </div>
  );
};

export default Auth;
