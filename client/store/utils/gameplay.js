import store from '../';

import { setArrDir, setArrClr, setKeyStroke} from '../reducers/arrowInfo';
import { addScore, minusScore } from '../reducers/scoreboard'

// keyStroke directions
const directions = {
  37: 'left',
  38: 'top',
  39: 'right',
  40: 'bottom'
}

// pick random keyCode and set the arrow info

export const genArrowInfo = () => {
  const keyStroke = (Math.floor(Math.random() * (40 - 37 + 1) + 37));
  const arrowDir = directions[keyStroke];

  store.dispatch(setArrDir(arrowDir));
  store.dispatch(setKeyStroke(keyStroke));
}

  // different gameModes , these functions will determine how the game will interpret and respond to key inputs
  // regular , doubleScore, freeze, change, reverser
export const regularMode = (event, key) => {
  if (key === event.keyCode) {
    console.log('YOU DID IT!!!!!!!')
    store.dispatch(setArrClr('correct'))
    store.dispatch(addScore());
    setTimeout((() => store.dispatch(setArrClr(''))), 200)
    genArrowInfo();
  }
  else if (key !== event.keyCode) {
    console.log('AWWW YOU FUCKED UP!')
    store.dispatch(setArrClr('incorrect'))
    store.dispatch(minusScore())
    // setTimeout((() => store.dispatch(setArrClr(''))), 400)
  }
}
