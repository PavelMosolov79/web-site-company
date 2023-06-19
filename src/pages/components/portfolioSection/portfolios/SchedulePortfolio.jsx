import React from "react";
import PortfolioCard from '../PortfolioCard';
import './SchedulePortfolio.css';

const SchedulePortfolio = () => {
    return (
    	<PortfolioCard title="ПРИЛОЖЕНИЕ" undertitle="РАСПИСАНИЕ ЗАНЯТИЙ">
    		<div className="portfolio__schedule__container">
    			<div className="schedule__img-container">
    				<img src="schedule1.png" alt="Приложение расписания"/>
					<div className="portfolio__img__two">
    					<img src="schedule2.png" alt="Приложение расписания"/>
					</div>
				</div>
    			<div className="schedule__text-container">
    				<h4>Расписание занятий</h4>
    				<p>Такое приложение требуется каждому учебному заведению, наши специалисты разработали индивидуальный дизайн и функционал для Сибирского Университета Телекоммуникаций и Информатики. По сей день приложение пользуется спросом и дополняется новыми функциями.</p>
    			</div>
    		</div>
    	</PortfolioCard>
    );
}

export default SchedulePortfolio;