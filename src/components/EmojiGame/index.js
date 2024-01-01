/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}


*/

// Write your code here.
import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import './index.css'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

const shuffledEmojisList = () => emojisList.sort(() => Math.random() - 0.5)

class EmojiGame extends Component {
  state = {
    totalScore: 0,
    topScore: 0,
    filteredList: [],
    winOrLose: false,
  }

  changeWinOrLose = () => {
    const {topScore, totalScore} = this.state

    this.setState({
      totalScore: 0,
      winOrLose: false,
      filteredList: [],
    })
  }

  clickingOnEmoji = id => {
    const {filteredList, winOrLose, totalScore, topScore} = this.state
    const filterList = emojisList.find(each => each.id === id)
    const checkItem = filteredList.includes(filterList)
    let score
    if (checkItem === true) {
      if (totalScore > topScore) {
        score = totalScore
      } else if (topScore === 11) {
        score = 12
      } else {
        score = topScore
      }
      this.setState({winOrLose: true, topScore: score})
    } else {
      this.setState(prevState => ({
        filteredList: [...prevState.filteredList, filterList],
        winOrLose: false,
        totalScore: prevState.totalScore + 1,
      }))
    }
  }

  render() {
    const {topScore, totalScore, winOrLose} = this.state
    const emojisItems = shuffledEmojisList()
    console.log(totalScore)
    let cont
    if (winOrLose) {
      if (totalScore === 10) {
        cont = (
          <div className="result-cont">
            <div className="cont1">
              <h1 className="heading1">You Won</h1>
              <p className="para">Best Score</p>
              <p className="para1">12/12</p>
              <button
                type="button"
                onClick={this.changeWinOrLose}
                className="btn"
              >
                Play Again
              </button>
            </div>
            <div className="cont2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
                className="win-image"
                alt="win or lose"
              />
            </div>
          </div>
        )
      } else {
        cont = (
          <div className="result-cont">
            <div className="cont1">
              <h1 className="heading1">You Lose</h1>
              <p className="para">Score</p>
              <p className="para1">{totalScore}/12</p>
              <button
                type="button"
                onClick={this.changeWinOrLose}
                className="btn"
              >
                Play Again
              </button>
            </div>
            <div className="cont2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
                className="win-image"
                alt="win or lose"
              />
            </div>
          </div>
        )
      }
    } else {
      cont = (
        <ul className="emojis-cont">
          {emojisList.map(eachItem => (
            <EmojiCard
              listItem={eachItem}
              key={eachItem.id}
              clickingOnEmoji={this.clickingOnEmoji}
            />
          ))}
        </ul>
      )
    }
    return (
      <div className="container">
        <NavBar
          totalScore={totalScore}
          topScore={topScore}
          winOrLose={winOrLose}
        />
        <div className="items-cont"> {cont}</div>
      </div>
    )
  }
}

export default EmojiGame
