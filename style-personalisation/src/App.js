import logo from './logo.svg';
import './App.css';

import ApplicationBar from './components/ApplicationBar';

/* import background image */
import backgroundImage from '../src/assests/home_page_bg.png'

function App() {
  return (
    <div className="App">
      <ApplicationBar/>
      <div> 
        <img className='backgroundImageStyle' src={backgroundImage}/>
      </div>
    </div>
  );
}

export default App;
