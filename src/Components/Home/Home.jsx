import banner from "../../assets/images/banner.jpg";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <section className="banner">
        <Link to="/products">
          <img src={banner} alt="yoga_life" className="banner img-fluid"></img>
        </Link>
      </section>
    </>
  );
};
