import "./testimonialsection.css";

import person1 from "../../../assets/image1.jpg";
import person2 from "../../../assets/image2.jpg";
import person3 from "../../../assets/image3.jpg";
import person4 from "../../../assets/image4.jpg";

const TestimonialSection = () => {
  const feedbacks = [
    {
      name: "Gabriella",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda aliquid expedita non fugit qui laudantium facere iure culpa alias esse.",
      image: person1,
    },
    {
      name: "Amelia",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda aliquid expedita non fugit qui laudantium facere iure culpa alias esse.",
      image: person2,
    },
    {
      name: "Nicholas",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda aliquid expedita non fugit qui laudantium facere iure culpa alias esse.",
      image: person3,
    },
    {
      name: "Tommy",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda aliquid expedita non fugit qui laudantium facere iure culpa alias esse.",
      image: person4,
    },
  ];

  return (
    <section className="testimonial-container">
      <div className="container">
        <div className="title">What People Say About Us!</div>
        <div className="testimonials">
          {feedbacks.map((feedback, index) => (
            <div key={index} className="testimonial">
              <div className="image-container">
                <img src={feedback.image} alt="person" />
              </div>
              <h3>{feedback.name}</h3>
              <p>{`"${feedback.review}"`}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
