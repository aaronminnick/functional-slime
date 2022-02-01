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
export const stateControl = storeState();

//curried
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state, 
      [prop]: value
    })
  }
}

const changeStateByValue = (prop) => {
  return (value) => {
    return (state) => ({
      ...state, 
      [prop]: (state[prop] || 0) + value
    })
  }
}

//example of function use
export const initialSize = changeState("size")(50);
export const makeRed = changeState("color")("red");
export const makeBlue = changeState("color")("blue");
export const growSlime = changeStateByValue("size")(20);
export const shrinkSlime = changeStateByValue("size")(-20);