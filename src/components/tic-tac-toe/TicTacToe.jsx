import Board from "./Board"
import "./tictactoestyle.css"

const TicTacToe = () => {
    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
}
export default TicTacToe
