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

//example of function use
export const makeRed = changeState("color")("red");
export const makeBlue = changeState("color")("blue");