import { useState } from "react"
import Square from "./Square"

const Board = () => {
    const [x, setX] = useState(true)
    const [squares, setSquares] = useState([null, null, null, null, null, null, null, null, null])
    const [winners, setWinners] = useState([null, null, null])
    const [gameEnd, setGameEnd] = useState(false)

    // useEffect(() => {
    //     // Update the document title using the browser API
    //     setWinners(getWinners());
    //     // document.title = `You clicked ${count} times`;
    //   }, []);
    function getWinners(){
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
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return [a,b,c];
            }
        }
        return [];
    }
    function calculateWinner() {
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
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            // let win = [a,b,c]
            // setWinners(win);  
            return squares[a];
          }
        }
        return null;
    }
    const writePlayerInput =(i)=>{
        if (calculateWinner() || squares[i]) {
            return;
          }
        // let sq = [...squares]
        squares[i] = x ? 'X' : 'O'
        setX(!x)
    }
    const renderSquare = (i) => {
        return <Square  key={i} 
        value={squares[i]}
        onClick={() => writePlayerInput(i)}
        winner = {winners.includes(i)}
        />;
    }
    const restartGame = () => {
        let sq = [...squares]
        sq.fill(null)
        setSquares(sq)
        setGameEnd(false)
        setWinners([null])
    }
    // function generateSquares(){
    //     const numberOfSquares = 9;
    //     return 
    //         <div className="board-row">
    //         {/* for (let i = 0; i < numberOfSquares; i++) { */}
    //         map(numberOfSquares, i){
    //                 {renderSquare(i)}
    //                 if(i % 2 == 0){

    //                 }
    //             }
    //         </div>
    // }
    const winner = calculateWinner()
    let status;
    if (winner && !gameEnd) {
      status = 'Winner: ' + winner;
    //   let newWinners = getWinners();
      setWinners(getWinners());
      setGameEnd(true)
    // console.log('Change the winners array ' + newWinners)
        // setWinners(newWinners);
    } else {
      status = 'Next player: ' + (x ? 'X' : 'O');
    }
    return (
        <div>
            <div className="status">{status}</div>
            {/* <div> */}
                <div className="board-row" >
            {squares.map((_square, index) => {
                // let sq = renderSquare(index)
                // if(index == 2 || index == 5)
                // {
                //     console.log("index = ", index)
                //     return (<div key={index}>{ renderSquare(index) }</div>)
                // }
                // else{
                //     console.log("Else")
                //     console.log("index = ", index)
                    return renderSquare(index)
                // }
                // return (index != 0 && (index  % 2 ) == 0) ? [sq, <br/>] : sq
                })
            }
            {/* </div> */}
                </div>
            {/* <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}  
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div> */}
            <button onClick={() => restartGame()}>Play Again</button>
        </div>
    );
}
export default Board
