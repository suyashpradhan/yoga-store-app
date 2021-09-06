import "./SignIn.css";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../../server-requests";
import { useAuth, useStateContext } from "../../context";

export const SignIn = () => {
  const { userAuthDispatch } = useAuth();
  const { dispatch } = useStateContext();

  const [formInputs, setFormInputs] = useState({
    userName: "",
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
      userName: formInputs.userName,
      password: formInputs.password,
    });

    if (response.status === 200) {
      localStorage?.setItem(
        "login",
        JSON.stringify({ isLoggedIn: true, userAuthToken: response.data.token })
      );

      userAuthDispatch({
        type: "SET_LOGIN",
        payload: { token: response.data.token },
      });
      dispatch({ type: "TOGGLE_TOAST", payload: "Succesfully logged in" });
      setTimeout(() => {
        navigate(state?.from ? state.from : "/");
      }, 1000);
    } else {
      setErrors(response.message);
    }
  };

  return (
    <div className="loginWrapper">
      <div className="loginCard">
        <div className="loginCardBody">
          <h1 className="loginCardHeader">Sign in to your account</h1>
          <form action="">
            <div className="formGroup">
              <label htmlFor="userName" className="label">
                Username
              </label>
              <input
                type="text"
                className="formField"
                onChange={handleInputs}
                value={formInputs.userName}
                name="userName"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password" className="label">
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
            <h3 className="error-text">{errors}</h3>
            <button
              className="button button-secondary loginButton"
              type="button"
              onClick={handleSubmit}
            >
              Sign In
            </button>
            <span className="flex j-content-center pT1 pB1 a-items-center ">
              or
            </span>

            <button
              style={{ marginTop: "0" }}
              className="button button-primary loginButton"
              type="button"
              onClick={() =>
                setFormInputs(() => ({
                  userName: "suyash123",
                  password: "123456",
                }))
              }
            >
              Guest Login
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
