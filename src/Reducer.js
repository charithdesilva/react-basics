const initialState = {
  count: 0,
  employee: {},
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log('Reducer exe for INCREMENT' + state.count);
      return Object.assign({}, state, {
        count: state.count + 1,
      });
    case 'DECREMENT':
      return Object.assign({}, state, {
        count: state.count - 1,
      });

    case 'SELECT_EMPLOYEE':
      return Object.assign({}, state, {
        employee: action.employee,
      });
    default:
      return state;
  }
};

export default Reducer;
