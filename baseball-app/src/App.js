import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import Dashboard from './components/Dashboard'

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
callBall=()=>{
    if(this.state.ball<=3){
        return  this.setState({ball:this.state.ball+1})
    }else{
        return this.state.ball
    }
}
callStrike=()=>{
  console.log(this)
    if(this.state.strike<=2){
        return this.setState({strike:this.state.strike+1})
    }else{
        return this.state.strike
    }

}
callFoul=()=>{
if(this.state.strike<=2){
    return this.setState({strike:this.state.strike+1})
}else{
    return this.setState({foul:this.state.foul+1})
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
            <h1>Hello</h1>
            <Dashboard strike={this.state.strike} strikeClick={this.callStrike}/>
        </div>
    )
}
}


export default App;
