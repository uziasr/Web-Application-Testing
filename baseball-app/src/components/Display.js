import React from 'react';


function Display(props) {
    return (
        <div>
            <p>Strikes: {props.strike}</p>
            <p>Ball: {props.ball}</p>
        </div>
    );
}

export default Display