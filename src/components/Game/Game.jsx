import React from "react";
import Board from "../Board/Board";
import { useState } from "react";
const Game = () => {
	const [player, Setplayer] = useState("X");
	const [cellPlayed, SetCellPlayed] = useState(Array(9).fill(""));

	const onClick = (id) => {
		Setplayer(player === "X" ? "O" : "X");
		cellPlayed[id] = player;
		SetCellPlayed([...cellPlayed]);
	};

	return (
		<div>
			<Board
				gridArray={cellPlayed}
				onClick={(cell) => {
					onClick(cell);
				}}
			/>
		</div>
	);
};

export default Game;
