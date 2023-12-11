import "./specialmenuoffer.css";
import greeksalad from "../../../assets/greeksalad.jpg";
import bruchetta from "../../../assets/bruchetta.svg";
import lemondesert from "../../../assets/lemondessert.jpg";
import carticon from "../../../assets/Basket.svg";

const SpecialOffer = ({ menu }) => {
  return (
    <div className="offer">
      <img src={menu.image} alt={menu.name} loading="lazy" />
      <div className="offer-info">
        <div className="head-item">
          <h4>{menu.name}</h4>
          <p className="price">Rs. {menu.price}/-</p>
        </div>
        <p className="description">{menu.description}</p>
        <a href="#SpecialOffers" className="btn-order">
          Order a Delivery
          <img src={carticon} alt="cart icon" loading="lazy" />
        </a>
      </div>
    </div>
  );
};

const SpecialOffers = () => {
  const menus = [
    {
      name: "GreekSalad",
      price: 180,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veritatis vitae dignissimos totam voluptate tenetur illo sed itaque , quos magnam voluptatibus , optio sequi dicta sapiente ? Quos , voluptatum sunt . Expedita , quaerat ?",
      image: greeksalad,
    },
    {
      name: "Bruchetta",
      price: 220,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veritatis vitae dignissimos totam voluptate tenetur illo sed itaque , quos magnam voluptatibus , optio sequi dicta sapiente ? Quos , voluptatum sunt . Expedita , quaerat ?",
      image: bruchetta,
    },
    {
      name: "LemonDesert",
      price: 200,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veritatis vitae dignissimos totam voluptate tenetur illo sed itaque , quos magnam voluptatibus , optio sequi dicta sapiente ? Quos , voluptatum sunt . Expedita , quaerat ?",
      image: lemondesert,
    },
  ];

  return (
    <section className="special-offers container">
      <div className="section-title">
        <h3>This Week Specials!</h3>
        <button className="btn-head btn-lg-primary">View All</button>
      </div>
      <div className="offers-items">
        {menus.map((menu, index) => (
          <SpecialOffer key={index} menu={menu} />
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
