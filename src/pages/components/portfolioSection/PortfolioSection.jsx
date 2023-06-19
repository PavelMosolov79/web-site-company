import MusicPortfolio from './portfolios/MusicPortfolio';
import SchedulePortfolio from './portfolios/SchedulePortfolio';
import VideoPortfolio from './portfolios/VideoPortfolio'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./PortfolioSection.css";

const PortfolioSection = () => {
    return (
    	<div className="portfolio__container">
    		<div className="portfolio__background" />
    		<div className="portfolio__header">
    			<h2 className="portfolio__header__text">ПОРТФОЛИО</h2>
    			<div className="portfolio__header__line"/>
    		</div>
    		<div className="portfolio__content">
    			<div className="portfolio__circuit portfolio__circuit_left"/>
    			<div className="portfolio__circuit portfolio__circuit_right"/>
    			<Carousel showArrows showStatus={false} infiniteLoop showThumbs={false} autoPlay interval="5000">
    				<SchedulePortfolio/>
					<VideoPortfolio/>
					<MusicPortfolio/>
    			</Carousel>
    		</div>
    	</div>
    );
}
export default PortfolioSection;