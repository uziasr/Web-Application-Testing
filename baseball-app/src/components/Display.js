import React from 'react';
import styled from 'styled-components'

const Score = styled.div`
display:flex;
width: 60%;
justify-content: space-around;
p{
    font-weight: 800;
    font-size: 24px;
}

`
function Display(props) {
    return (
        <Score>
            <p>Strikes: {props.strike}</p>
            <p>Ball: {props.ball}</p>
        </Score>
    );
}

export default Display