import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignupPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const userInfo = {
      name,
      email,
      password,
      confirmPassword,
    };
    console.log(userInfo);

    try {
      const user = await axios.post(
        "http://localhost:5000/user/signup",
        userInfo
      );
      if (user.data.status === 1) {
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
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
      <h1 className="text-4xl text-white font-bold">Sign Up</h1>

      <form
        onSubmit={submitHandler}
        className="self-center flex flex-col gap-8 text-2xl"
      >
        <input
          className="p-2 text-white bg-transparent placeholder-gray-200
                     outline-none border-b-2 border-b-50"
          placeholder="User name"
          value={name}
          onChange={handleNameChange}
          type="text"
          required
        />

        <input
          className="p-2 text-white bg-transparent placeholder-gray-200
                     outline-none border-b-2 border-b-50"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          type="email"
          required
        />
        <input
          className="p-2 text-white bg-transparent placeholder-gray-200
                     outline-none border-b-2 border-b-50"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          type="password"
          required
          minLength={8}
        />

        <input
          className={`p-2 text-white bg-transparent placeholder-gray-200 outline-none ${
            password !== confirmPassword
              ? "border-b-2 border-red-500"
              : "border-b-50"
          }`}
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
          type="password"
        />
        <button
          type="submit"
          className="p-2 border-2 border-white rounded-lg
         text-white text-xl
            hover:-translate-y-2 hover:cursor-pointer 
            hover:transition-all hover:shadow-2xl
            active:bg-cyan-800"
        >
          Sign Up
        </button>
      </form>

      <p className="text-2xl text-white font-semibold">
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default SignupPage;
