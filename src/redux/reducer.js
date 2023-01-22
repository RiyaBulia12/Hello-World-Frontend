const GET_GREETING = 'GET_GREETING';
const initialState = [{ text: 'Good Morning'}];

const greetingReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_GREETING:
      return action.payload;
    default:
      return state;
  }
}

export default greetingReducer;
