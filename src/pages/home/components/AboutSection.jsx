import "./aboutsection.css";
import lemon1 from "../../../assets/restaurant-chef-B.jpg";
import lemon2 from "../../../assets/Mario-and-Adrian-b.jpg";

const AboutSection = () => {
  return (
    <section className="lemon-container">
      <div className="container-relative">
        <div className="lemon-container-text">
          <h3>Little Lemon India</h3>
          <h5>India</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non,
            nisi ut odit ex neque reprehenderit accusantium optio ratione eius
            temporibus veritatis maiores, architecto fugiat saepe suscipit totam
            cupiditate ullam beatae accusamus soluta libero quas! Itaque vel aut
            laborum aliquid ullam iste omnis beatae, incidunt quis! Nihil nobis
            eaque officia minus iure soluta eum, voluptate odio tenetur ratione
            molestias illo quasi harum blanditiis, vero, autem excepturi totam
            unde perferendis odit optio neque. Eligendi nam aliquid quos vitae
            eveniet aliquam accusantium.
          </p>
        </div>
        <div className="lemon-container-images">
          <img
            className="lemon-image1"
            src={lemon1}
            alt="Little Lemon India 1"
          />
          <img
            className="lemon-image2"
            src={lemon2}
            alt="Little Lemon India 2"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
