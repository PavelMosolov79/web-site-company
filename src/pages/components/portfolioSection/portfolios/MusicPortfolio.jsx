import React from "react";
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import PortfolioCard from '../PortfolioCard';
import MyAudioPlayer from './MyAudioPlayer';
import "./MusicPortfolio.css";

const MusicPortfolio = () => {
    return (
    	<PortfolioCard title="МУЗЫКА">
    		<div className="portfolio__music__container">
	    		<MyAudioPlayer src="space_man.mp3" author="Кирилл Липинский" title="Space man" />
	    		<MyAudioPlayer src="cinematic intro.mp3" author="Кирилл Липинский" title="Cinematic intro" />
	    		<MyAudioPlayer src="arabic.mp3" author="Кирилл Липинский" title="Arabic" />
    		</div>
    	</PortfolioCard>
    );
}

export default MusicPortfolio;