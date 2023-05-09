import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import OurTeam from "./Components/OurTeam";
import Works from "./Components/Works";
import WeDo from "./Components/WeDo";
import Partners from "./Components/Partners";
import RoadMap from "./Components/RoadMap";
import Hero from "./Components/Hero";
import Mission from "./Components/Mission";
import Algo from "./Components/Algo";
import Footer from "./Components/Footer";
import Faq from "./Components/Faq";
import Loader from "./Components/Loader";
import BackTop from "./Components/BackTop";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <div
        style={{
          zIndex: "1235",
          position: "fixed",
          background: "black",
          height: "100%",
        }}
      >
        {" "}
        <Loader />
      </div>
      <BackTop />
      <div className="overflow-hidden">
        <Hero />
        <Mission />
        <Partners />
        <Algo />
        <WeDo />
        <Works />
        <OurTeam />
        <RoadMap />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default App;
