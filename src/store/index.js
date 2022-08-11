import { createStore } from "redux";

const reducerFn = (state = { counter: 0 }, action) => {
  // should always be a synchronous func
  // shoutl not mutate the original state
  // if we do mutate state inside store, it will crash the app

  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  }

  if (action.type === "DEC") {
    return { counter: state.counter - 1 };
  }

  return state;
};

const store = createStore(reducerFn);

export default store;
