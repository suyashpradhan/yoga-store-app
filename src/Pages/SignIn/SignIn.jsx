import "./SignIn.css";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../../server-requests";
import { useAuth } from "../../Context/auth-context";
import { useToastHook } from "../../CustomHooks/useToast";

export const SignIn = () => {
  const toast = useToastHook(3000);
  const { userAuthDispatch } = useAuth();
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();

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
      toast("success", "Succesfully Logged in");
      localStorage?.setItem(
        "login",
        JSON.stringify({ isLoggedIn: true, userAuthToken: response.data.token })
      );
      userAuthDispatch({
        type: "SET_LOGIN",
        payload: { token: response.data.token },
      });
      navigate(state?.from ? state.from : "/");
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
              <label htmlFor="email" className="label">
                Email
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
