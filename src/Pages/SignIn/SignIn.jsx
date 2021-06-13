import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../server-requests";
import "./SignIn.css";

export const SignIn = () => {
  const [formInputs, setFormInputs] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const handleInputs = (e) => {
    setFormInputs((inputs) => {
      return {
        ...inputs,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      email: formInputs.email,
      password: formInputs.password,
    });

    if (response.status === 200) {
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } else {
      setErrors(response.data);
    }
  };

  return (
    <div className="loginWrapper">
      <div className="loginCard">
        <div className="loginCardBody">
          <h1 className="loginCardHeader">Sign in to your account</h1>
          <form action="">
            <div className="formGroup">
              <label htmlFor="" className="label">
                Username
              </label>
              <input
                type="text"
                className="formField"
                onChange={handleInputs}
                value={formInputs.email}
                name="email"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="" className="label">
                Password
              </label>
              <input
                type="password"
                className="formField"
                onChange={handleInputs}
                value={formInputs.password}
                name="password"
              />
            </div>
            <button
              className="button button-secondary loginButton"
              type="button"
              onClick={handleSubmit}
            >
              Continue
            </button>
          </form>

          <Link to="/register" className="link registerLink">
            Don't have an account? <span>Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
