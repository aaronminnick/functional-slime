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
const changeStateToValue = (prop) => {
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

//closures
export const initialSize = changeStateToValue("size")(50);
export const makeRed = changeStateToValue("color")("red");
export const makeBlue = changeStateToValue("color")("blue");
export const growSlime = changeStateByValue("size")(20);
export const shrinkSlime = changeStateByValue("size")(-20);