import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { registerUser } from '../../server-requests';

export const SignUp = () => {
  const { dispatch } = useStateContext();

  const [formInputs, setFormInputs] = useState({
    userName: '',
    fullName: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState('');
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleInputs = (e) => {
    setFormInputs((inputs) => {
      return {
        ...inputs,
        [e.target.name]: e.target.value
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await registerUser({
      userName: formInputs.userName,
      fullName: formInputs.fullName,
      email: formInputs.email,
      password: formInputs.password
    });
    console.log(response);
    if (response.status === 201 || response.status === 200) {
      dispatch({
        type: 'TOGGLE_TOAST',
        payload: 'Succesfully Signed up, login with your credentials'
      });
      setTimeout(() => {
        navigate(state?.from ? state.from : '/login');
      }, 1000);
    } else {
      setErrors(response.message);
    }
  };

  return (
    <div className="loginWrapper">
      <div className="loginCard">
        <div className="loginCardBody">
          <h1 className="loginCardHeader">Create your YogaLife Account</h1>
          <form onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="" className="label">
                Full name
              </label>
              <input
                type="text"
                className="formField"
                name="fullName"
                value={formInputs.fullName}
                onChange={handleInputs}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="" className="label">
                User name
              </label>
              <input
                type="text"
                className="formField"
                name="userName"
                value={formInputs.userName}
                onChange={handleInputs}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="" className="label">
                {' '}
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
                {' '}
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
            <p className="error-text text-center">{errors}</p>
            <button className="button button-secondary loginButton">Create Account</button>
          </form>

          <Link to="/login" className="link registerLink">
            Have an account? <span>Sign in</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
