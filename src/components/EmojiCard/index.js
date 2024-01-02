// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {listItem, clickingOnEmoji} = props
  const {id, emojiName, emojiUrl} = listItem

  const onEmojiChange = () => {
    clickingOnEmoji(id)
  }

  return (
    <li className="emoji-cont">
      <button className="btn2" type="button">
        <img
          src={emojiUrl}
          alt={emojiName}
          className="emoji"
          onClick={onEmojiChange}
        />
      </button>
    </li>
  )
}
export default EmojiCard

