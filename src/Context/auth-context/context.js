import {
  createContext,
  useContext,
  useReducer,
} from "react/cjs/react.production.min";
import { userAuthReducer } from "./reducers";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const user = JSON.parse(
    localStorage.getItem("login") || {
      isLoggedIn: false,
      userAuthToken: null,
    }
  );

  const [userAuthState, userAuthDispatch] = useReducer(userAuthReducer, user);

  return (
    <AuthContext.Provider value={{ userAuthState, userAuthDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
