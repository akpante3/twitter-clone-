import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './TweetInput.scss'


function TweetInput() {
  return (
    <div className="tweet-input">
      <div className="tweet-input__profile-wrapper">
        <img className="tweet-input__profile-image" src="https://pbs.twimg.com/media/E-4OH53XEAI6a8h.jpg" alt="profile" />
      </div>
      <div className="flex-1">
        <input className="tweet-input__input" type="text" placeholder="Whats happening ?"></input>
        <div className="flex justify-between mt-4">
          <div className="tweet-input__icon-wrapper">
              <FontAwesomeIcon icon="calendar-days" />
              <FontAwesomeIcon icon="image" />
              <FontAwesomeIcon icon="location" />
              <FontAwesomeIcon icon="grin" />
          </div>
          <div>
            <button class="bg-sky-500 p-2 rounded">
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetInput;
