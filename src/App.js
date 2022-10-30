import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCalendarDays, faImage, faGrin, faLocation } from '@fortawesome/free-solid-svg-icons'
// import { faGrin } from '@fortawesome/free-regular-svg-icons'

// components
import TweetInput from './components/TweetInput';
import './App.scss';

library.add(faCheckSquare, faCalendarDays, faImage, faGrin, faLocation )

function App() {
  return (
    <div className="app-wrapper">
        <div className="app-wrapper__container">
            busy body
        </div>
        <div className="app-wrapper__container app-wrapper__container--middle">
            <TweetInput />
        </div>
        <div className="app-wrapper__container">
              busy body
        </div>
    </div>
  );
}

export default App;
