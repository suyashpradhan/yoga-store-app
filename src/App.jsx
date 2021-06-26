import axios from "axios";
import { Header } from "./Components/Header";
import { useEffect } from "react";
import { useStateContext } from "./Context";
import { PageRoutes } from "./routes";
import { useAuth } from "./Context/auth-context";
import { wishlist, bag } from "./API/URL";

export const App = () => {
  const { dispatch } = useStateContext();
  const {
    userAuthState: { isLoggedIn, userAuthToken },
  } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      (async () => {
        try {
          const response = await axios.get(wishlist, {
            headers: { authorization: userAuthToken },
          });
          dispatch({ type: "SET_WISHLIST", payload: response.data });
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [dispatch, isLoggedIn, userAuthToken]);

  useEffect(() => {
    if (isLoggedIn) {
      (async () => {
        try {
          const response = await axios.get(bag, {
            headers: { authorization: userAuthToken },
          });
          dispatch({ type: "SET_CART", payload: response.data });
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [dispatch, isLoggedIn, userAuthToken]);

  return (
    <>
      <Header />
      <PageRoutes />
    </>
  );
};
