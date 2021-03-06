import axios from "axios";
import { Header } from "./components/Header";
import { useEffect } from "react";
import { useStateContext } from "./context";
import { PageRoutes } from "./routes";
import { useAuth } from "./context";
import { fetchUserBag, fetchUserWishlist } from "./server-requests";
import { Toast } from "./components/Toast/Toast";

export const App = () => {
  const {
    state: { toastMessage },
    dispatch,
  } = useStateContext();
  const {
    userAuthState: { isLoggedIn, userAuthToken },
  } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      axios.defaults.headers.common["Authorization"] = userAuthToken;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      fetchUserWishlist(dispatch);
      fetchUserBag(dispatch);
    }
  }, [isLoggedIn]);

  return (
    <>
      <Header />
      <PageRoutes />
      {toastMessage && <Toast />}
    </>
  );
};
