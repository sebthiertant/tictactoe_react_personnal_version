import React from "react";
import Board from "../Board/Board";
import Display from "../Display/Display";
import { useState } from "react";
import "./Game.css";

const Game = () => {
	const [turn, SetTurn] = useState(0);
	const [player, Setplayer] = useState("X");
	const [cellPlayed, SetCellPlayed] = useState(Array(9).fill(""));
	const [history, SetHistory] = useState([]);

	const onClick = (cell) => {
		SetTurn(turn + 1);
		Setplayer(player === "X" ? "O" : "X");
		cellPlayed[cell] = player;
		SetCellPlayed([...cellPlayed]);
		SetHistory([...history, player, cell]);
	};

	const winner = () => {
		const winnerTemplate = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
	};

	return (
		<div className="container">
			<Board
				gridArray={cellPlayed}
				onClick={(cell) => {
					onClick(cell);
				}}
			/>
			<Display player={player} turn={turn} />
		</div>
	);
};

export default Game;
