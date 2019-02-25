//generic store

const { createStore } = Redux;
const store = createStore(reducer);

//generic reducer format

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case 'ACTION_ONE':
      // any necessary logic
      newState = {
        firstStateItem: state.firstStateItem,
        secondStateItem: state.secondStateItem,
        stateItemBeingChanged: action.newUpdatedStateValue,
      }
      return newState;
    case 'ACTION_TWO':
      // any necessary logic
      newState = {
        firstStateItem: state.firstStateItem,
        secondStateItem: state.secondStateItem,
        stateItemBeingChanged: action.differentUpdatedStateValue,
      }
      return newState;
    default:
      return state;
  }
}

//generic ACTION_ONE

store.dispatch({
  type: 'ACTION_ONE',
  newUpdatedStateValue: 'example state value'
});

//generic subscription and render
const render = () {
  ...
}
store.subscribe(render);
