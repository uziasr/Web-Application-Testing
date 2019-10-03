import React from 'react';

function Dashboard(props) {
    console.log(props)
    return (
        <div>
            <p>strikes {props.strike} </p>
            <button onClick={props.strikeClick}>strike</button>
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

