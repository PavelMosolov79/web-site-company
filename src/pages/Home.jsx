import MainSection from "./components/mainSection/MainSection";
import AboutSection from "./components/aboutSection/AboutSection";
import ServiceSection from "./components/serviceSection/ServiceSection";
import PortfolioSection from "./components/portfolioSection/PortfolioSection";
import ContactSection from "./components/contactSection/ContactSection";
import FoterSection from "./components/foterSection/FoterSection";
import StockSection from "./components/stockSection/StockSection"
import { useRef } from "react";
import "./Home.css";

export default function Home() {
  const fullpage = useRef(null);

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    fullpage.current.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });  
  };

  return (
    <scroll-container ref={fullpage} class="fullpage__container">
      <scroll-page id='mainSection'>
          <MainSection func={scrollToElement}/>
      </scroll-page>
      <scroll-page id='aboutSection'>
          <AboutSection func={scrollToElement}/>
      </scroll-page>
      <scroll-page id='serviceSection'>
          <ServiceSection/>
      </scroll-page>
      <scroll-page id='stockSection'>
          <StockSection func={scrollToElement}/>
      </scroll-page>
      <scroll-page id='portfolioSection'>
          <PortfolioSection/>
      </scroll-page>
      <scroll-page id='contactSection'>
          <ContactSection/>
      </scroll-page>
      <scroll-page id='foterSection' class="foter__container">
          <FoterSection func={scrollToElement}/>
      </scroll-page>
    </scroll-container>
  )
}
