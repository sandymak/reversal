import store from '../';

import { setGameStatus, setRemainingSeconds, resetRemainingSeconds } from '../reducers/countDown';
import { resetScore } from '../reducers/scoreboard';

// begin the game, which start 60sec timer.
export const startGame = () => {
  store.dispatch(setGameStatus('playing'))
  store.dispatch(resetScore())
  const intervalId = setInterval(() => {
  const storeState = store.getState().countDown.remainingSeconds
    if (storeState === 0) {
      store.dispatch(setGameStatus('game-over'))
      store.dispatch(resetRemainingSeconds())
      clearInterval(intervalId);
    } else {
      store.dispatch(setRemainingSeconds())
    }
  }, 1000)
  // this.setState({ gameStatus: 'playing'}, () => {
  //   this.intervalId = setInterval(() => {
  //     this.setState(prevState => {
  //       const newRemainingSeconds = prevState.remainingSeconds -1;
  //       if (newRemainingSeconds === 0) {
  //         clearInterval(this.intervalId);
  //         return {gameStatus: 'lost', remainingSeconds: 0, currentScore: 0};
  //       }
  //       return {remainingSeconds: newRemainingSeconds}
  //     });
  //   }, 1000);
  // });
}

function progress(timeleft, timetotal, $element) {
  var progressBarWidth = timeleft * $element.width() / timetotal;
  $element.find('div').animate({ width: progressBarWidth }, 500).html(Math.floor(timeleft/60) + ":"+ timeleft%60);
  if (timeleft > 0) {
      setTimeout(function() {
          progress(timeleft - 1, timetotal, $element);
      }, 1000);
  }
};

progress(600, 600, $('#progressBar'));