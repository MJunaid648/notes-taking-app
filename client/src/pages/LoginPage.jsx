import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const userInfo = {
      email: email,
      password: password,
    };
    // console.log("userInfo", userInfo);
    try {
      const user = await axios.post(
        "http://localhost:5000/user/login",
        userInfo,
        { withCredentials: true }
      );
      if (user.data.status === 1) {
        setEmail("");
        setPassword("");
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="self-center flex flex-col p-[1dvh] gap-12 
                  border-2 rounded-lg 
                 md:p-20
                    "
    >
      <h1 className="text-4xl text-white font-bold">Login</h1>

      <form
        onSubmit={submitHandler}
        className="self-center flex flex-col gap-8 text-2xl"
      >
        <input
          className="p-2 text-white bg-transparent placeholder-gray-200
                     outline-none border-b-2 border-b-50"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          type="email"
        />
        <input
          className="p-2 text-white bg-transparent placeholder-gray-200
                     outline-none border-b-2 border-b-50"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          type="password"
        />
        <button
          className="p-2 border-2 border-white rounded-lg
         text-white text-xl
            hover:-translate-y-2 hover:cursor-pointer 
            hover:transition-all hover:shadow-2xl
            active:bg-cyan-800"
        >
          Login
        </button>
      </form>

      <p className="text-2xl text-white font-semibold">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default LoginPage;
