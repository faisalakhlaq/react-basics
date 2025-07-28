import React, { useState } from 'react';

import Todo from './Todo';
import Weather from './Weather';
import TicTacToe from './tic-tac-toe/TicTacToe';

const dividerLineStyle = {
    color: "#9999"
};

const Playground = () => {
    const [currentApp, setCurrentApp] = useState(null);

    const renderCurrentApp = () => {
        switch (currentApp) {
            case 'todo':
                return <Todo />;
            case 'weather':
                return <Weather />;
            case 'tic-tac-toe':
                return <TicTacToe />;
            default:
                return (
                    <>
                        <h1 style={{ textAlign: "center" }}>Simple Apps</h1>
                        <ul style={{ listStyleType: 'none', padding: 0, textAlign: "center" }}> 
                            <li><a href="#playground" onClick={() => setCurrentApp('todo')} style={{ display: 'block', padding: '10px 0', textDecoration: 'none', color: '#007bff' }}>Todo App</a></li>
                            <hr style={dividerLineStyle}/>
                            <li><a href="#playground" onClick={() => setCurrentApp('weather')} style={{ display: 'block', padding: '10px 0', textDecoration: 'none', color: '#007bff' }}>Weather</a></li>
                            <hr style={dividerLineStyle}/>
                            <li><a href="#playground" onClick={() => setCurrentApp('tic-tac-toe')} style={{ display: 'block', padding: '10px 0', textDecoration: 'none', color: '#007bff' }}>TicTacToe Game</a></li>
                        </ul>
                    </>
                );
        }
    };

    return (
        <div className='container'>
            {currentApp && ( // Only show "Back to List" button if an app is selected
                <button
                    onClick={() => setCurrentApp(null)}
                    style={{
                        marginBottom: '20px',
                        padding: '10px 15px',
                        backgroundColor:  "steelblue",
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    &larr; Back to App List
                </button>
            )}
            {renderCurrentApp()}
        </div>
    );
}

export default Playground;
