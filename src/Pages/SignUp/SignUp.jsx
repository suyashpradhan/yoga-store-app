import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { registerUser } from "../../server-requests";

export const SignUp = () => {
  const [formInputs, setFormInputs] = useState({
    firstName: "",
    lastName: "",
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
    const response = await registerUser({
      firstName: formInputs.firstName,
      lastName: formInputs.lastName,
      email: formInputs.email,
      password: formInputs.password,
    });
    console.log(response);
    if (response.status === 201) {
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } else {
      console.log("Error");
    }
  };

  return (
    <div className="loginWrapper">
      <div className="loginCard">
        <div className="loginCardBody">
          <h1 className="loginCardHeader">Create your YogaStore account</h1>
          <form onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="" className="label">
                First name
              </label>
              <input
                type="text"
                className="formField"
                name="firstName"
                value={formInputs.firstName}
                onChange={handleInputs}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="" className="label">
                Last name
              </label>
              <input
                type="text"
                className="formField"
                name="lastName"
                value={formInputs.lastName}
                onChange={handleInputs}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="" className="label">
                {" "}
                Email
              </label>
              <input
                type="email"
                name="email"
                className="formField"
                value={formInputs.email}
                onChange={handleInputs}
              />
            </div>

            <div className="formGroup">
              <label htmlFor="" className="label">
                {" "}
                Password
              </label>
              <input
                type="password"
                className="formField"
                name="password"
                value={formInputs.password}
                onChange={handleInputs}
              />
            </div>
            <button className="button button-secondary loginButton">
              Create Account
            </button>

            <p>{errors}</p>
          </form>

          <Link to="/login" className="link registerLink">
            Have an account? <span>Sign in</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
