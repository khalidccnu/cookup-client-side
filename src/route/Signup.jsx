import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/Auth.jsx";

const Signup = () => {
  const { createUserWithEP } = useContext(AuthContext);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    purl: "",
  });

  const changeInput = ({ target }) => {
    const { name, value } = target;

    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const { name, email, password, purl } = e.target;

    createUserWithEP(name.value, email.value, password.value, purl.value);
    setInput({
      name: "",
      email: "",
      password: "",
      purl: "",
    });
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="artboard phone-2 max-w-full !h-auto mx-auto border rounded p-5">
          <h2 className="font-semibold text-2xl text-center">Signup</h2>
          <form className="form-control mt-5 space-y-4" onSubmit={handleSignup}>
            <div>
              <label className="label label-text pt-0">Name</label>
              <input
                type="text"
                name="name"
                value={input.name}
                className="input input-sm input-bordered rounded-none w-full"
                onChange={changeInput}
              />
            </div>
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
              <label className="label label-text pt-0">Photo URL</label>
              <input
                type="text"
                name="purl"
                value={input.purl}
                className="input input-sm input-bordered rounded-none w-full"
                onChange={changeInput}
              />
            </div>
            <div>
              <button type="submit" className="btn btn-sm btn-accent w-full">
                Signup
              </button>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-2">
              <span>Already have an account?</span>
              <Link to="/login" className="text-accent">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
