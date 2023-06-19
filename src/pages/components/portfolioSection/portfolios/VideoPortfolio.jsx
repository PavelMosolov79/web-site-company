import React from "react";
import PortfolioCard from '../PortfolioCard';
import './VideoPortfolio.css';

const VideoPortfolio = () => {
    return (
    	<PortfolioCard title="3D - МОДЕЛИРОВАНИЕ" undertitle="ДЛЯ ПРОДВИЖЕНИЯ В СОЦСЕТЯХ">
    		<div className="portfolio__video__container">
    			<div className="video__container">
					<video controls="controls">
						<source src="./portfolio-viseo.mp4"/>
					</video>
				</div>
    			<div className="schedule__text-container">
    				<h4>3D ВИДЕО ДЛЯ REELS</h4>
    				<p>Недавно в нашу компанию обратились с просьбой помочь в продвижении блога через reels. Задача стояла очень интересная, требовалось сделать видео в 3D для
						психологической игры, которая бы раскрывала суть до того, как клиент решит связаться в автором блога. Процесс разработки надолго останется у нас в памяти, 
						а полученный результат еще долго будет радовать автора блога и его подписчиков!
					</p>
    			</div>
    		</div>
    	</PortfolioCard>
    );
}

export default VideoPortfolio;