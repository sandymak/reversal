// playing, won, lost
const initialState = { gameStatus: 'new', remainingSeconds: 5 };

// ACTION TYPE
const SET_GAME_STATUS = 'SET_GAME_STATUS';
const SET_REMAINING_SECONDS = 'SET_REMAINING_SECONDS';
const RESET_REMAINING_SECONDS = 'RESET_REMAINING_SECONDS';

export const setGameStatus = (gameStatus) => {
  const action = {
    type: SET_GAME_STATUS,
    gameStatus
  }
  return action
}

export const setRemainingSeconds = () => {
  const action = {
    type: SET_REMAINING_SECONDS,
  }
  return action
}

export const resetRemainingSeconds = () => {
  const action = {
    type: RESET_REMAINING_SECONDS,
  }
  return action
}

const countDownReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_GAME_STATUS:
      return {...state, gameStatus: action.gameStatus }

    case SET_REMAINING_SECONDS:
      return {...state, remainingSeconds: --state.remainingSeconds}

    case RESET_REMAINING_SECONDS:
      return {...state, remainingSeconds: 5}

    default:
      return state
  }
}

export default countDownReducer
