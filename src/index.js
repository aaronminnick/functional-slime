//function for storing state
const storeState = () => {
  let currentState = {};
  //the arrow function state => state will allow the function to return present state if called with no arg
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

//wrap in a new function to provide closure
const stateControl = storeState();

//non-curried version
const changeState = (state, prop, value) => {
  return {
    ...state,
    [prop]: (state[prop] || 0) + value
  }
}

//curried
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state, 
      [prop]: (state[prop] || 0) + value
    })
  }
}

//example of function use
const blueFood = changeState("soil")(5);

stateControl(blueFood);
