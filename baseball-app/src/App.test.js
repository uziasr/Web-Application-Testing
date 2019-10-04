import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "@testing-library/react";
import {Dashboard} from './components/Dashboard'
import {addOne} from './App'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('increments ball or strike by 1', ()=>{

  expect(addOne(10)).toBe(11)
  
})

test('increments ball or strike by 1', ()=>{

  expect(addOne(10)).toBe(12)//test should fail
  
})


test('strike',()=>{
  const {getByText} = render(<App />);
  getByText(/hit/i)
})
