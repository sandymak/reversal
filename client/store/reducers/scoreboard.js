const initialState = {score: 0};

// ACTION TYPE

const ADD_SCORE = 'ADD_SCORE';
const MINUS_SCORE = 'MINUS_SCORE';
const RESET_SCORE = 'RESET_SCORE'

// ACTION CREATOR

export const addScore = () => {
  const action = {
    type: ADD_SCORE
  };
  return action;
}

export const minusScore = () => {
  const action = {
    type: MINUS_SCORE
  };
  return action;
}

export const resetScore = () => {
  const action = {
    type: RESET_SCORE
  }
  return action;
}

// REDUCER
const scoreboardReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_SCORE:
      return {...state, score: ++state.score}

    case MINUS_SCORE:
      return {...state, score: --state.score}

    case RESET_SCORE:
      return {...state, score: -0}

    default:
      return state
  }
}

export default scoreboardReducer

