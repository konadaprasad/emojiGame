// Write your code here.
import './index.css'

const NavBar = props => {
  const {totalScore, topScore, winOrLose} = props

  let navItem
  if (winOrLose === true) {
    navItem = (
      <div className="nav-bar">
        <div className="scores">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
            alt="emoji logo"
            className="logo-image"
          />
          <h1 className="emoji-game">Emoji Game</h1>
        </div>
      </div>
    )
  } else {
    navItem = (
      <div className="nav-bar">
        <div className="scores">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
            alt="emoji logo"
            className="logo-image"
          />
          <h1 className="emoji-game">Emoji Game</h1>
        </div>

        <div className="scores">
          <p className="score">Score: {totalScore}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      </div>
    )
  }

  return navItem
}
export default NavBar
