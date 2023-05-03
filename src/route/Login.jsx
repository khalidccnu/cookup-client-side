import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../context/Auth.jsx";

const Login = () => {
  const { signInWithEP, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const fromURL = location.state?.fromURL.pathname || "/";

  const changeInput = ({ target }) => {
    const { name, value } = target;

    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target;

    if (email.value === "" || password.value === "") {
      toast.error("All fields are required!");
      return false;
    }

    signInWithEP(email.value, password.value)
      .then((_) => navigate(fromURL, { replace: true }))
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          toast.error("Incorrect password.");
        } else if (error.message === "Firebase: Error (auth/user-not-found).") {
          toast.error("User not found.");
        }
      });

    setInput({
      email: "",
      password: "",
    });
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="artboard phone-2 max-w-full !h-auto mx-auto border rounded p-5">
          <h2 className="font-semibold text-2xl text-center">Login</h2>
          <form className="form-control mt-5 space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="label label-text pt-0">Email</label>
              <input
                type="email"
                name="email"
                value={input.email}
                className="input input-sm input-bordered rounded-none w-full"
                onChange={changeInput}
              />
            </div>
            <div>
              <label className="label label-text pt-0">Password</label>
              <input
                type="password"
                name="password"
                value={input.password}
                className="input input-sm input-bordered rounded-none w-full"
                onChange={changeInput}
              />
            </div>
            <div>
              <button type="submit" className="btn btn-sm btn-accent w-full">
                Login
              </button>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-2">
              <span>New to CookUp?</span>
              <Link to="/signup" className="text-accent">
                Create New Account
              </Link>
            </div>
            <div className="divider">or</div>
            <div
              className="flex justify-center items-center p-2 border space-x-2 cursor-pointer"
              onClick={signInWithGoogle}
            >
              <FaGoogle className="text-2xl" />
              <span>Continue with Google</span>
            </div>
            <div
              className="flex justify-center items-center p-2 border space-x-2 cursor-pointer"
              onClick={signInWithGithub}
            >
              <FaGithub className="text-2xl" />
              <span>Continue with Github</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
