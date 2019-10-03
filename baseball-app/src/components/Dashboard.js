import React from 'react';

function Dashboard(props) {
    console.log(props)
    return (
        <div>
            <button onClick={props.strikeClick}>strike</button>
            <button onClick={props.ballClick}>ball</button>
            <button onClick={props.foul}>foul</button>
            <button onClick={props.hit}>hit</button>
        </div>
    );
}
export default Dashboard

// export default Dashboard(props) {
//     return (
//         <div>
            
//         </div>
//     );
// ;

