import restauranfood from "../../../assets/restauranfood.jpg";
import "./bannersection.css";
const BannerSection = () => {
  return (
    <section className="section-banner">
      <div className="section-wrap container">
        <div className="banner-text">
          <h2>Little Lemon</h2>

          <p>India</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
            excepturi non explicabo vitae. Cupiditate praesentium in distinctio
            maiores ipsam ea.
          </p>
          <button className="btn-lg-primary btn-banner">
            Reserve a Table
          </button>
        </div>
        <div className="banner-image-wrap">
          <img src={restauranfood} alt="restaurant food" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
