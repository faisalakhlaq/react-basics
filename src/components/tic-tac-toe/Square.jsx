
const Square = ({value, winner, onClick}) => {
    return (
        <button className={`square ${winner ? 'winner' : ''}`}
            onClick={() => onClick()}>
            {value}
        </button>
    );
}
export default Square