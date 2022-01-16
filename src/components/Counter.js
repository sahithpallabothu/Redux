import { Component, Fragment } from "react";

import classes from "./Counter.module.css";
import { useSelector, useDispatch, connect } from "react-redux";
import { counterActions } from "../store/counter";


const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const isShowCounter = useSelector((state) => state.counter.showCounter);
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); //redux will sind this value as {type:SOME_UNIQUE_KEY,payload:10} 
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShowCounter && (
        <Fragment>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={incrementHandler}>INCREMENT</button>
            <button onClick={increaseHandler}>INCREMENT BY 10</button>
            <button onClick={decrementHandler}>DECREMENT</button>
          </div>
        </Fragment>
      )}

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler(){
//       this.props.increment();
//   }
//   decrementHandler(){
//       this.props.decrement();
//   }
//   toggleCounterHandler(){

//   }
//   render() {

//     return (
//         <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>INCREMENT</button>
//           <button onClick={this.decrementHandler.bind(this)}>DECREMENT</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state =>{
//   return {
//     counter : state.counter
//   };
// }

// const mapDispatchToProps = dispatch =>{
//   return {
//     increment: () => dispatch({ type: "INCREMENT" }),
//     decrement: () => dispatch({ type: "DECREMENT" })
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
