import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { Up, Down, selectCount } from './Redux/Slices/countSlice';


function App() {
  let dispatch = useDispatch();
  let count = useSelector(selectCount);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=>{dispatch(Up())}}>+</button>
      
      <button  onClick={()=>{dispatch(Down())}}>-</button>
    </div>
  );
}

export default App;
