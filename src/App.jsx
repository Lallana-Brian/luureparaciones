import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import HomeSwiper from "./components/swiperHome/HomeSwiper";
import Navbar from "./components/navbar/Navbar";
import FeaturedServices from "./components/serviceCard/FeaturedServices";
import WhyChooseUs from "./components/elejirnos/WhyChooseUs";
import ContactForm from "./components/contactForm/ContactForm";
import Footer from "./components/footer/Footer";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <HomeSwiper />
      <FeaturedServices />
      <WhyChooseUs />
      <ContactForm />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
