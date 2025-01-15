import Square from "./Square";

const Board = ({ xIsNext, squares, onPlay }) => {
	console.log(squares);

	const handleClick = (i) => {
		if (squares[i] || calculateWinner(squares)) return;
		const nextSquares = squares.slice();

		xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");

		onPlay(nextSquares);
	};

	const calculateWinner = (squares) => {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				return squares[a];
			}
		}
		return null;
	};

	const winner = calculateWinner(squares);
	let status;

	if (winner) {
		status = `The Winner is: ${winner}`;
	} else {
		status = `Next Player is: ${xIsNext ? "X" : "O"}`;
	}

	return (
		<div>
			<div>{status}</div>
			<div className="board-row">
				{squares.map((square, idx) => (
					<Square
						key={idx}
						value={squares[idx]}
						onSquareClick={() => handleClick(idx)}
					/>
				))}
			</div>
		</div>
	);
};

export default Board;
