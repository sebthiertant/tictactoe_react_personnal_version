import React from "react";
import Cell from "../Cell/Cell";
import "./Board.css";

const Board = (props) => {
	const { gridArray, onClick } = props;

	return (
		<div className="board">
			{gridArray.map((cell, id) => {
				return (
					<Cell
						key={id}
						cell={cell}
						onClick={() => {
							onClick(id);
						}}
					/>
				);
			})}
		</div>
	);
};

export default Board;
