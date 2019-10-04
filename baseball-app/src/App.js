import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import Dashboard from './components/Dashboard'
import Display from './components/Display'


export const addOne = num => num + 1

class App extends React.Component {
  constructor(){
    super()
    this.state={
        strike:0,
        ball:0,
        foul:0,
        hit:0
    }
}



resetDetails = () =>{
    return (this.setState({
        strike:0,
        ball:0,
        foul:0,
        hit:0
    }))
}

callBall=()=>{

    this.state.ball <3 ? this.setState({ball:addOne(this.state.ball)}):this.resetDetails();
    
}
callStrike=()=>{
    this.state.strike <2 ? this.setState({strike:addOne(this.state.strike)}):this.resetDetails();

}
callFoul=()=>{
if(this.state.strike<2){
    return this.setState({strike:addOne(this.state.strike)})
}else{
    return this.setState({foul:addOne(this.state.foul)})
}}



// componentWillMount() {

// }

// componentDidMount() {

// }

// componentWillReceiveProps(nextProps) {

// }

// shouldComponentUpdate(nextProps, nextState) {

// }

// componentWillUpdate(nextProps, nextState) {

// }

// componentDidUpdate(prevProps, prevState) {

// }

// componentWillUnmount() {

// }

render(){
  console.log(this.state.strike)
    return(
        <div>

            <div>
                <Display strike={this.state.strike} ball={this.state.ball}/>
                <Dashboard ballClick={this.callBall} strikeClick={this.callStrike} hit={this.resetDetails} foul={this.callFoul}/>
            </div>
        </div>
    )
}
}


export default App;