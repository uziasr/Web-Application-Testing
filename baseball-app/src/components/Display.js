import React from 'react';

function Display(props) {
    return (
        <>
            <p>{props.strike}</p>
            <p>{props.ball}</p>
        </>
    );
}

export default Display