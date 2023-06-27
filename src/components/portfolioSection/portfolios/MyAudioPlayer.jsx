import React from "react";
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './MyAudioPlayer.css';

const MyAudioPlayer = ({author, title, src}) => {
    return (
    		<AudioPlayer
			    src={src}
			    customControlsSection={
				    [
				    	RHAP_UI.MAIN_CONTROLS,
				    ]
				  }
				customProgressBarSection={
				    [
				    <div className="music_custom-title__container">
				    		<div>{author}</div>
				    		<div>{title}</div>
				    	</div>,
				    	RHAP_UI.CURRENT_TIME,
				      	RHAP_UI.PROGRESS_BAR,
				      	RHAP_UI.DURATION
				    ]
				}
				layout="horizontal-reverse"
				showJumpControls={false}
				customIcons={{
					play: <img src="/play-button.svg" />,
					pause: <img src="/stop-button.svg" />,
				}}		
				style={{height: '100px'}}
			/>
    );
}

export default MyAudioPlayer;