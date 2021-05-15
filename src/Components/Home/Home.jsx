import banner from "../../assets/images/banner.jpg";
import { useStateContext } from "../../Context";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  const { dispatch } = useStateContext();

  return (
    <>
      <section className="banner">
        <Link to="/products">
          <button onClick={() => dispatch({ payload: "products" })}>
            <img
              src={banner}
              alt="yoga_life"
              className="banner img-fluid"
            ></img>
          </button>
        </Link>
      </section>
    </>
  );
};
