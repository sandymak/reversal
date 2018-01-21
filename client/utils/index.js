// begin the game, which start 60sec timer.
// export const startGame = () => {
//   this.setState({ gameStatus: 'playing'}, () => {
//     this.intervalId = setInterval(() => {
//       this.setState(prevState => {
//         const newRemainingSeconds = prevState.remainingSeconds -1;
//         if (newRemainingSeconds === 0) {
//           clearInterval(this.intervalId);
//           return {gameStatus: 'lost', remainingSeconds: 0, currentScore: 0};
//         }
//         return {remainingSeconds: newRemainingSeconds}
//       });
//     }, 1000);
//   });
// };

// change gameMode
export const changeGameMode = (newMode) => {
  if (newMode && newMode !== '') {
    this.setState({gameMode: newMode})
  }
}