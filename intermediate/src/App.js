import './App.css';
import './Components/Player.css'
import Player from './Components/Player.js';
import Data from './Data.json'
import List from './List/List.js'

function App() {
  return (
    <div>
      <h1>Football</h1>
        <Player playerName = {Data[0].Player} playerClub = {Data[0].Club} />
        <List />
    </div>
  );
}

export default App;
