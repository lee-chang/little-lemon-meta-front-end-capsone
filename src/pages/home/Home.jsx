import AboutSection from "./components/AboutSection";
import BannerSection from "./components/BannerSection";
import SpecialOffers from "./components/SpecialMenuOffersSection";
import TestimonialSection from "./components/TestimonialSection";

const Home = () => {
  return (
    <>
      <BannerSection />
      <SpecialOffers />
      <TestimonialSection />
      <AboutSection />
    </>
  );
};

export default Home;
