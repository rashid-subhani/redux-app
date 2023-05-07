import React from 'react';
import "./App.css";
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber, multNumber, divideNumber } from './actions/index';

const App = () => {
  const myState = useSelector((state)=> state.changeTheNumber);
  const myState1 = useSelector((state1)=> state1.multTheNumber);
  const dispatch = useDispatch();
  return (
    <>
    <div className='container'>
      <h1>Increment/Decrement Counter</h1>
      <h4>Using React and Redux</h4>

      <div className="quantity">
        <a className='quantity__minus' title='Decrement' onClick={()=> dispatch(decNumber(5))}><span> - </span></a>
        <input type="text" name='quantity' className='quantity__input' value={myState}/>
        <a className='quantity__plus' title='Increment' onClick={()=> dispatch(incNumber(5))}><span> + </span></a>
      </div>
    </div>


  <div className='container my-5'>
      <h1>Multiplication/Divide Counter</h1>
      <h4>Using React and Redux</h4>

      <div className="quantity">
        <a className='quantity__minus' title='Decrement' onClick={()=> dispatch(multNumber(5))}><span> * </span></a>
        <input type="text" name='quantity' className='quantity__input' value={myState1}/>
        <a className='quantity__plus' title='Increment' onClick={()=> dispatch(divideNumber(5))}><span> / </span></a>
      </div>
    </div>
    </>
  )
}

export default App
