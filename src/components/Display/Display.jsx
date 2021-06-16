import React from "react";
import "./Display.css";

const Display = (props) => {
	const { player, turn } = props;
	return (
		<div className="display">
			<p>Joueur actuel : {player}</p>
			<p>Tour : {turn}</p>
		</div>
	);
};

export default Display;
