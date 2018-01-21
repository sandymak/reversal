const initialState = {arrowDir: 'right', keyStroke: 39, gameMode: 'regular', arrowClr: ''};

// ACTION TYPE
const SET_ARR_DIR = 'SET_ARR_DIR';
const SET_ARR_CLR = 'SET_ARR_CLR';
const SET_KEYSTROKE = 'SET_KEYSTROKE';
const SET_GAME_MODE = 'SET_GAME_MODE';
const REGULAR_GAME_MODE = 'REGULAR_GAME_MODE';

// ACTION CREATOR

export const setArrDir = (arrowDir) => {
  const action = {
    type: SET_ARR_DIR,
    arrowDir
  };
  return action;
}

export const setArrClr = (arrowClr) => {
  const action = {
    type: SET_ARR_CLR,
    arrowClr
  };
  return action;
}

export const setKeyStroke = (keyStroke) => {
  const action = {
    type: SET_KEYSTROKE,
    keyStroke
  };
  return action;
}

const setGameMode = (gameMode) => {
  const action = {
    type: SET_GAME_MODE,
    gameMode
  };
  return action;
}

// REDUCER
const arrowInfoReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_ARR_DIR:
      return {...state, arrowDir: action.arrowDir}

    case SET_ARR_CLR:
      return {...state, arrowClr: action.arrowClr}

    case SET_KEYSTROKE:
      return {...state, keyStroke: action.keyStroke}

    default:
      return state
  }
}

export default arrowInfoReducer

