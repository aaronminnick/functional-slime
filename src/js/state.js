//function for storing state
const storeState = () => {
  let currentState = {};
  //the arrow function state => state will allow the function to return present state if called with no arg
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

//wrap in a new function to provide closure
export const stateControl = storeState();

//curried
const changeStateToValue = (prop) => {
  return (value) => {
    return (state) => ({
      ...state, 
      [prop]: value
    });
  };
};

// const changeStateByValue = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state, 
//       [prop]: (state[prop] || 0) + value
//     });
//   };
// };

const changeStateByValueWithClamp = (prop) => {
  return (value, min, max) => {
    return (state) => ({
      ...state, 
      [prop]: Math.min(Math.max((state[prop] || 0) + value, min), max)   
    });
  };
};

//closures
export const initialSize = changeStateToValue("size")(60);
export const makeRed = changeStateToValue("color")("red");
export const makeBlue = changeStateToValue("color")("blue");
export const growSlime = changeStateByValueWithClamp("size")(20, 60, 600);
export const shrinkSlime = changeStateByValueWithClamp("size")(-20, 60, 600);