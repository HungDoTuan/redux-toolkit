import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { incrementByAmount, increment, decrement } from "./redux/counter";
import Test from "./useImmer";

function App() {
  const count = useSelector((state) => state.counter.counter);
  console.log(count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Test />
      <h1> My number {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        increment by 10
      </button>
    </div>
  );
}

export default App;
