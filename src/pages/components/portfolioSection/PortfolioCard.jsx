import React from 'react';
import './PortfolioCard.css';

function PortfolioCard({children, title, undertitle}) {
	return (
			<div className="portfolio-card__container">
				<div className="portfolio-card__title">
					<h3>{title}</h3>
					<h3>{undertitle}</h3>
				</div>
				<div className="portfolio-card__content">
					{children}
				</div>
				<div className="portfolio-card__end"/>
			</div>
		);
}

export default PortfolioCard;