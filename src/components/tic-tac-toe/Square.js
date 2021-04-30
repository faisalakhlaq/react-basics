import { useState } from 'react'

const Square = ({value, onClick}) => {
    // const [squareNumber, setSquareNumber] = useState(null)
    return (
        <button className="square" onClick={() => onClick()}>
            {value}
        </button>
    );
}
export default Square