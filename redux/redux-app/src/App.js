import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index';

function App() {
  const myState = useSelector((state)=> state.changeNumber );
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Increment and Decrement Counter</h1>
      <h4>Using React and Redux</h4>

      <div className="counter">
        <a className='counter_minus' title='Decrement' onClick={() => dispatch(decNumber(5))}><span>-</span></a>
        <input type="text" name='counter' className='counter_input' value={myState} />
        <a className='counter_plus' title='Increment' onClick={() => dispatch(incNumber(5))}><span>+</span></a>
      </div>
    </div>
  );
}

export default App;
