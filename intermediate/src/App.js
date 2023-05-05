import './App.css';
import './Components/Player.css'
import Player from './Components/Player.js';
import Data from './Data.json'

function App() {
  return (
    <div>
      <h1>Football</h1>
        <Player playerName = {Data[0].Player} playerClub = {Data[0].Club} />
    </div>
  );
}

export default App;
