import React from 'react';
import styled from 'styled-components'

const ButtonsWrap = styled.div`

`

function Dashboard(props) {
    console.log(props)
    return (
        <ButtonsWrap>
            <button onClick={props.strikeClick}>strike</button>
            <button onClick={props.ballClick}>ball</button>
            <button onClick={props.foul}>foul</button>
            <button onClick={props.hit}>hit</button>
        </ButtonsWrap>
    );
}
export default Dashboard

// export default Dashboard(props) {
//     return (
//         <div>
            
//         </div>
//     );
// ;

