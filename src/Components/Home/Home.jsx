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
        <img
          src="https://yoga-trivia-assets.s3.ap-south-1.amazonaws.com/free-shipping.webp"
          alt="free-shipping"
          className="banner img-fluid"
        ></img>
      </section>

      {/*  <section className="pT3 brandSection">
        <div className="wrapper-fluid">
          <div className="brands">
            <h1 className="sectionHeader">BIGGEST DEALS ON TOP BRANDS</h1>
            <div className="brands-row">
              <img
                src="https://yoga-trivia-assets.s3.ap-south-1.amazonaws.com/puma.webp"
                alt="nike"
                className="brand-image"
              ></img>
              <img
                src="https://yoga-trivia-assets.s3.ap-south-1.amazonaws.com/VeroModa.webp"
                alt="puma"
                className="brand-image"
              ></img>
              <img
                src="https://yoga-trivia-assets.s3.ap-south-1.amazonaws.com/nike.webp"
                alt="puma"
                className="brand-image"
              ></img>

              <img
                src="https://yoga-trivia-assets.s3.ap-south-1.amazonaws.com/F21.webp"
                alt="puma"
                className="brand-image"
              ></img>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};
