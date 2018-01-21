// playing, won, lost
const initialState = { gameStatus: 'new', remainingSeconds: 5 };

// ACTION TYPE
const SET_GAME_STATUS = 'SET_GAME_STATUS';
const SET_REMAINING_SECONDS = 'SET_REMAINING_SECONDS';

export const setGameStatus = (gameStatus) => {
  const action = {
    type: SET_GAME_STATUS,
    gameStatus
  }
}

export const setRemaningSeconds = (remainingSeconds) => {
  const action = {
    type: SET_REMAINING_SECONDS,
    remainingSeconds
  }
}

// begin the game, which start 60sec timer.
export const startGame = () => {
  this.setState({ gameStatus: 'playing'}, () => {
    this.intervalId = setInterval(() => {
      this.setState(prevState => {
        const newRemainingSeconds = prevState.remainingSeconds -1;
        if (newRemainingSeconds === 0) {
          clearInterval(this.intervalId);
          return {gameStatus: 'lost', remainingSeconds: 0, currentScore: 0};
        }
        return {remainingSeconds: newRemainingSeconds}
      });
    }, 1000);
  });
};

const countDownReducer = (state = initialState, action) => {
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

export default countDownReducer
