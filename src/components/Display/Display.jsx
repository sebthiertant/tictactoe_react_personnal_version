import React from "react";
import "./Display.css";

const Display = (props) => {
	const { player, turn } = props;
	return (
		<div className="display">
			<p>
				Joueur actuel : <span className={`span_${player}`}>{player}</span>
			</p>
			<p>Tour : {turn}</p>
		</div>
	);
};

export default Display;
