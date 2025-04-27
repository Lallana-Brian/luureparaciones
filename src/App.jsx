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

  // const { hash } = useLocation();

  // useEffect(() => {
  //   const id = hash?.replace("#", "");
  //   const section = id && document.getElementById(id);
  //   section?.scrollIntoView({ behavior: "smooth" });
  // }, [hash]);

  return (
    <>
      <Navbar />
      <HomeSwiper />
      <FeaturedServices />
      <WhyChooseUs />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
