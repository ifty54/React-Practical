import './App.css';
import './Components/Player.css'
import Player from './Components/Player.js';
import Data from './Data.json'
import List from './List/List.js'
import Match from './Components/Match.js'

function App() {
  return (
    <div>
      <h1>Football</h1>
        <Player playerName = {Data[0].Player} playerClub = {Data[0].Club} />
        <List />
        <Match company="Star Sports" type="Limited Company" />
    </div>
  );
}

export default App;
