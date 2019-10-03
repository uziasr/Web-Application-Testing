import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addOne} from './App'
import {render} from '@testing-library/react'
import {Dashboard} from './components/Dashboard'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  console.log('hello')
  ReactDOM.unmountComponentAtNode(div);
});

test('increments ball or strike by 1', ()=>{

  expect(addOne(10)).toBe(11)
  
})

// test('strike',()=>{
//   const {getByText} = render(<Dashboard />);
//   getByText(/strike/i)
// })