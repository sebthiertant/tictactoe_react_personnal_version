import React from "react";
import "./Cell.css";
const Cell = (props) => {
	const { cell, onClick } = props;

	/* disable the button on click*/
	return (
		<div className="cell">
			<button
				disabled={cell !== ""}
				className={`button ${cell}`}
				onClick={() => {
					onClick();
				}}
			>
				{cell}
			</button>
		</div>
	);
};
export default Cell;
